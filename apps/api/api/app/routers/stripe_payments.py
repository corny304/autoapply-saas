import os
import stripe
from fastapi import APIRouter, HTTPException, Request, Header
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional

router = APIRouter()

# Stripe-Konfiguration
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")

# Stripe-Preis-IDs (werden als Umgebungsvariablen gesetzt)
PRICE_IDS = {
    "starter": "price_free",  # Kostenloser Plan (kein Stripe-Checkout)
    "pro": os.getenv("STRIPE_PRICE_PRO", "price_1234567890pro"),
    "business": os.getenv("STRIPE_PRICE_BUSINESS", "price_1234567890business"),
}


class CheckoutSessionRequest(BaseModel):
    price_id: str
    success_url: str
    cancel_url: str
    customer_email: Optional[str] = None


class PortalSessionRequest(BaseModel):
    customer_id: str
    return_url: str


@router.post("/create-checkout-session")
async def create_checkout_session(request: CheckoutSessionRequest):
    """
    Erstellt eine Stripe Checkout Session für ein Abo.
    """
    try:
        # Checkout Session erstellen
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=[
                {
                    "price": request.price_id,
                    "quantity": 1,
                }
            ],
            mode="subscription",
            success_url=request.success_url,
            cancel_url=request.cancel_url,
            customer_email=request.customer_email,
            allow_promotion_codes=True,
            billing_address_collection="auto",
            metadata={
                "plan": "pro" if "pro" in request.price_id.lower() else "business",
            },
        )

        return {"checkout_url": session.url, "session_id": session.id}

    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/create-portal-session")
async def create_portal_session(request: PortalSessionRequest):
    """
    Erstellt eine Stripe Customer Portal Session für Abo-Verwaltung.
    """
    try:
        session = stripe.billing_portal.Session.create(
            customer=request.customer_id,
            return_url=request.return_url,
        )

        return {"portal_url": session.url}

    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/webhook")
async def stripe_webhook(request: Request):
    """
    Webhook-Handler für Stripe-Events.
    Verarbeitet subscription.created, subscription.updated, subscription.deleted, etc.
    """
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")

    # Event-Typ verarbeiten
    event_type = event["type"]
    event_data = event["data"]["object"]

    if event_type == "checkout.session.completed":
        # Checkout abgeschlossen
        session = event_data
        customer_id = session.get("customer")
        subscription_id = session.get("subscription")
        customer_email = session.get("customer_email")

        print(f"✅ Checkout completed: {customer_email} -> {subscription_id}")
        
        # TODO: In Datenbank speichern
        # await save_subscription_to_db(customer_id, subscription_id, customer_email)

    elif event_type == "customer.subscription.created":
        # Neues Abo erstellt
        subscription = event_data
        customer_id = subscription.get("customer")
        subscription_id = subscription["id"]
        status = subscription["status"]
        plan_id = subscription["items"]["data"][0]["price"]["id"]

        print(f"✅ Subscription created: {subscription_id} - Status: {status}")
        
        # TODO: In Datenbank speichern
        # await create_subscription_in_db(customer_id, subscription_id, plan_id, status)

    elif event_type == "customer.subscription.updated":
        # Abo aktualisiert
        subscription = event_data
        subscription_id = subscription["id"]
        status = subscription["status"]

        print(f"🔄 Subscription updated: {subscription_id} - Status: {status}")
        
        # TODO: In Datenbank aktualisieren
        # await update_subscription_in_db(subscription_id, status)

    elif event_type == "customer.subscription.deleted":
        # Abo gekündigt
        subscription = event_data
        subscription_id = subscription["id"]

        print(f"❌ Subscription deleted: {subscription_id}")
        
        # TODO: In Datenbank als gekündigt markieren
        # await cancel_subscription_in_db(subscription_id)

    elif event_type == "invoice.payment_succeeded":
        # Zahlung erfolgreich
        invoice = event_data
        subscription_id = invoice.get("subscription")
        amount_paid = invoice.get("amount_paid")

        print(f"💰 Payment succeeded: {subscription_id} - {amount_paid/100}€")
        
        # TODO: Zahlung in Datenbank protokollieren
        # await log_payment_in_db(subscription_id, amount_paid)

    elif event_type == "invoice.payment_failed":
        # Zahlung fehlgeschlagen
        invoice = event_data
        subscription_id = invoice.get("subscription")

        print(f"⚠️ Payment failed: {subscription_id}")
        
        # TODO: Benutzer benachrichtigen
        # await notify_payment_failed(subscription_id)

    return JSONResponse(content={"status": "success"})


@router.get("/prices")
async def get_prices():
    """
    Gibt alle verfügbaren Preispläne zurück.
    """
    return {
        "starter": {
            "id": "starter",
            "name": "Starter",
            "price": 0,
            "currency": "eur",
            "interval": "month",
            "features": [
                "3 Bewerbungen gratis",
                "Jobcenter-Nachweise",
                "DSGVO-konform",
            ],
        },
        "pro": {
            "id": "pro",
            "name": "Pro",
            "price": 29,
            "currency": "eur",
            "interval": "month",
            "stripe_price_id": PRICE_IDS["pro"],
            "features": [
                "50 Bewerbungen/Monat",
                "Automatische Job-Suche",
                "Alle Starter-Features",
                "Priority Support",
            ],
        },
        "business": {
            "id": "business",
            "name": "Business",
            "price": 79,
            "currency": "eur",
            "interval": "month",
            "stripe_price_id": PRICE_IDS["business"],
            "features": [
                "Unbegrenzte Bewerbungen",
                "KI-Optimierung",
                "Alle Pro-Features",
                "Dedizierter Account Manager",
            ],
        },
    }


@router.get("/subscription/{customer_id}")
async def get_subscription(customer_id: str):
    """
    Ruft die aktuelle Subscription eines Kunden ab.
    """
    try:
        subscriptions = stripe.Subscription.list(customer=customer_id, limit=1)
        
        if not subscriptions.data:
            return {"subscription": None, "status": "no_subscription"}
        
        subscription = subscriptions.data[0]
        
        return {
            "subscription_id": subscription.id,
            "status": subscription.status,
            "current_period_end": subscription.current_period_end,
            "cancel_at_period_end": subscription.cancel_at_period_end,
            "plan": subscription.items.data[0].price.id,
        }
    
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=400, detail=str(e))
