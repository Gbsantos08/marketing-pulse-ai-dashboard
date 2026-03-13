from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.db.models import Campaign as DB_Campaign, Comment as DB_Comment
from app.schemas.campaign import Campaign, CampaignCreate
from app.schemas.sentiment import Comment, CommentCreate, SentimentAnalysisResult
from app.ml.sentiment_model import predict_sentiment
from app.ml.prediction_model import predict_engagement

router = APIRouter()

@router.post("/campaigns/", response_model=Campaign)
def create_campaign(campaign: CampaignCreate, db: Session = Depends(get_db)):
    db_campaign = DB_Campaign(**campaign.dict())
    db.add(db_campaign)
    db.commit()
    db.refresh(db_campaign)
    return db_campaign

@router.get("/campaigns/", response_model=List[Campaign])
def read_campaigns(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    campaigns = db.query(DB_Campaign).offset(skip).limit(limit).all()
    return campaigns

@router.get("/campaigns/{campaign_id}", response_model=Campaign)
def read_campaign(campaign_id: int, db: Session = Depends(get_db)):
    campaign = db.query(DB_Campaign).filter(DB_Campaign.id == campaign_id).first()
    if campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")
    return campaign

@router.post("/comments/", response_model=Comment)
def create_comment_and_analyze_sentiment(comment: CommentCreate, db: Session = Depends(get_db)):
    sentiment, score = predict_sentiment(comment.text)
    db_comment = DB_Comment(**comment.dict(), sentiment=sentiment, sentiment_score=score)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment

@router.get("/campaigns/{campaign_id}/sentiment_analysis/", response_model=SentimentAnalysisResult)
def get_campaign_sentiment_analysis(campaign_id: int, db: Session = Depends(get_db)):
    comments = db.query(DB_Comment).filter(DB_Comment.campaign_id == campaign_id).all()
    if not comments:
        return SentimentAnalysisResult(positive=0, negative=0, neutral=0, total_comments=0)

    positive_count = sum(1 for c in comments if c.sentiment == "positive")
    negative_count = sum(1 for c in comments if c.sentiment == "negative")
    neutral_count = sum(1 for c in comments if c.sentiment == "neutral")
    total = len(comments)

    return SentimentAnalysisResult(
        positive=positive_count / total,
        negative=negative_count / total,
        neutral=neutral_count / total,
        total_comments=total
    )

@router.get("/campaigns/{campaign_id}/predict_engagement/")
def get_predicted_engagement(campaign_id: int, db: Session = Depends(get_db)):
    campaign = db.query(DB_Campaign).filter(DB_Campaign.id == campaign_id).first()
    if campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")

    # Para fins de demonstração, usaremos valores fixos para content_type e target_audience
    # Em um cenário real, você extrairia ou passaria esses valores.
    # Exemplo: content_type = 1 (video), target_audience = 0 (young_adults)
    predicted_value = predict_engagement(campaign.budget, 1, 0)
    return {"campaign_id": campaign_id, "predicted_engagement": predicted_value}