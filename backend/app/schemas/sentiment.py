from pydantic import BaseModel
from datetime import datetime  # ← Esta linha estava faltando!
from typing import List, Optional

class CommentBase(BaseModel):
    campaign_id: int
    text: str

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    sentiment: Optional[str]
    sentiment_score: Optional[float]
    created_at: datetime

    class Config:
        orm_mode = True

class SentimentAnalysisResult(BaseModel):
    positive: float
    negative: float
    neutral: float
    total_comments: int