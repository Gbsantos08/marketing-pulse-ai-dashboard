from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class CampaignBase(BaseModel):
    name: str
    start_date: datetime
    end_date: datetime
    budget: float
    impressions: Optional[int] = 0
    clicks: Optional[int] = 0
    conversions: Optional[int] = 0

class CampaignCreate(CampaignBase):
    pass

class Campaign(CampaignBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True