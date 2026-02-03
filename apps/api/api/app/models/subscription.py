from sqlalchemy import Column, String, Integer, DateTime, Boolean, Enum as SQLEnum
from sqlalchemy.sql import func
from enum import Enum
import datetime


class SubscriptionStatus(str, Enum):
    ACTIVE = "active"
    CANCELED = "canceled"
    PAST_DUE = "past_due"
    UNPAID = "unpaid"
    TRIALING = "trialing"
    INCOMPLETE = "incomplete"


class SubscriptionPlan(str, Enum):
    STARTER = "starter"
    PRO = "pro"
    BUSINESS = "business"


# SQLAlchemy Modell (wenn Sie SQLAlchemy verwenden)
# Kommentieren Sie dies aus, wenn Sie kein SQLAlchemy verwenden
"""
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Subscription(Base):
    __tablename__ = "subscriptions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True, nullable=False)
    customer_id = Column(String, unique=True, nullable=False)  # Stripe Customer ID
    subscription_id = Column(String, unique=True, nullable=False)  # Stripe Subscription ID
    plan = Column(SQLEnum(SubscriptionPlan), nullable=False)
    status = Column(SQLEnum(SubscriptionStatus), nullable=False)
    current_period_start = Column(DateTime, nullable=True)
    current_period_end = Column(DateTime, nullable=True)
    cancel_at_period_end = Column(Boolean, default=False)
    canceled_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    subscription_id = Column(String, index=True, nullable=False)
    invoice_id = Column(String, unique=True, nullable=False)  # Stripe Invoice ID
    amount = Column(Integer, nullable=False)  # in Cents
    currency = Column(String, default="eur")
    status = Column(String, nullable=False)  # paid, failed, etc.
    paid_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
"""


# Pydantic Modelle für API
from pydantic import BaseModel
from typing import Optional


class SubscriptionCreate(BaseModel):
    user_id: str
    customer_id: str
    subscription_id: str
    plan: SubscriptionPlan
    status: SubscriptionStatus


class SubscriptionUpdate(BaseModel):
    status: Optional[SubscriptionStatus] = None
    current_period_end: Optional[datetime.datetime] = None
    cancel_at_period_end: Optional[bool] = None


class SubscriptionResponse(BaseModel):
    id: int
    user_id: str
    customer_id: str
    subscription_id: str
    plan: SubscriptionPlan
    status: SubscriptionStatus
    current_period_start: Optional[datetime.datetime]
    current_period_end: Optional[datetime.datetime]
    cancel_at_period_end: bool
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        from_attributes = True


class PaymentCreate(BaseModel):
    subscription_id: str
    invoice_id: str
    amount: int
    currency: str = "eur"
    status: str


class PaymentResponse(BaseModel):
    id: int
    subscription_id: str
    invoice_id: str
    amount: int
    currency: str
    status: str
    paid_at: Optional[datetime.datetime]
    created_at: datetime.datetime

    class Config:
        from_attributes = True
