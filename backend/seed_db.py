from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import datetime
import random
from app.db.models import Base, Campaign, Comment

DATABASE_URL = "sqlite:///./marketing_db.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    if db.query(Campaign).count() > 0:
        print("Database already seeded")
        return
        
    campaigns_data = [
        {"name": "Lançamento Q3 - Tech", "budget": 15000.0, "impressions": 145000, "clicks": 2340, "conversions": 142},
        {"name": "Promoção Dia das Mães", "budget": 8500.0, "impressions": 89000, "clicks": 1800, "conversions": 310},
        {"name": "Webinar IA & Marketing", "budget": 3000.0, "impressions": 25000, "clicks": 850, "conversions": 120},
        {"name": "Retargeting Cart Abandonment", "budget": 5000.0, "impressions": 40000, "clicks": 1200, "conversions": 180},
    ]

    for data in campaigns_data:
        campaign = Campaign(
            name=data["name"],
            budget=data["budget"],
            impressions=data["impressions"],
            clicks=data["clicks"],
            conversions=data["conversions"],
            start_date=datetime.datetime.now() - datetime.timedelta(days=random.randint(5, 30)),
            end_date=datetime.datetime.now() + datetime.timedelta(days=random.randint(5, 30))
        )
        db.add(campaign)
        db.commit()
        db.refresh(campaign)

        # Add mock comments
        for i in range(random.randint(2, 6)):
            sentiment_score = random.uniform(0.1, 1.0) * (1 if random.random() > 0.3 else -1)
            sentiment = "positive" if sentiment_score > 0 else "negative"
            text_samples_pos = ["Ótima campanha!", "Adorei a apresentação", "Muito bom, recomendo", "Sensacional!!"]
            text_samples_neg = ["Não gostei do criativo", "Pouca informação no anúncio", "Poderia ser melhor"]
            
            comment = Comment(
                campaign_id=campaign.id,
                text=random.choice(text_samples_pos if sentiment == "positive" else text_samples_neg),
                sentiment=sentiment,
                sentiment_score=abs(sentiment_score)
            )
            db.add(comment)
        
    db.commit()
    db.close()
    print("Database seeded with sample data")

if __name__ == "__main__":
    seed_db()
