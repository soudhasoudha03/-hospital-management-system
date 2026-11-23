from django.db import models
from patients.models import Patient
from appointments.models import Appointment


class Bill(models.Model):

    class PaymentStatus(models.TextChoices):
        PENDING = "Pending", "Pending"
        PARTIAL = "Partial", "Partial"
        PAID = "Paid", "Paid"

    class PaymentMethod(models.TextChoices):
        CASH = "Cash", "Cash"
        CARD = "Card", "Card"
        UPI = "UPI", "UPI"
        INSURANCE = "Insurance", "Insurance"

    patient = models.ForeignKey(
        Patient,
        on_delete=models.PROTECT,
        related_name="bills"
    )

    appointment = models.ForeignKey(
        Appointment,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="bills"
    )

    invoice_number = models.CharField(max_length=30, unique=True)
    description = models.TextField(blank=True)

    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING
    )

    payment_method = models.CharField(
        max_length=20,
        choices=PaymentMethod.choices,
        blank=True
    )

    due_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.invoice_number