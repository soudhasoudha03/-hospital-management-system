from django.db import models
from patients.models import Patient
from doctors.models import Doctor


class Appointment(models.Model):

    class Status(models.TextChoices):
        SCHEDULED = "Scheduled", "Scheduled"
        CONFIRMED = "Confirmed", "Confirmed"
        COMPLETED = "Completed", "Completed"
        CANCELLED = "Cancelled", "Cancelled"

    class AppointmentType(models.TextChoices):
        CONSULTATION = "Consultation", "Consultation"
        FOLLOW_UP = "Follow-up", "Follow-up"
        EMERGENCY = "Emergency", "Emergency"

    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name="appointments"
    )

    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.PROTECT,
        related_name="appointments"
    )

    appointment_date = models.DateField()
    appointment_time = models.TimeField()

    appointment_type = models.CharField(
        max_length=20,
        choices=AppointmentType.choices,
        default=AppointmentType.CONSULTATION
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.SCHEDULED
    )

    reason = models.TextField(blank=True)
    notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-appointment_date", "-appointment_time"]

    def __str__(self):
        return f"{self.patient} - Dr. {self.doctor} - {self.appointment_date}"