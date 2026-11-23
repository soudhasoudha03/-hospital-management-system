from django.db import models
from patients.models import Patient
from doctors.models import Doctor


class MedicalRecord(models.Model):

    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name="medical_records"
    )

    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.PROTECT,
        related_name="medical_records"
    )

    record_date = models.DateField()
    diagnosis = models.CharField(max_length=255)
    symptoms = models.TextField(blank=True)
    treatment = models.TextField(blank=True)
    prescription = models.TextField(blank=True)
    notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-record_date"]

    def __str__(self):
        return f"{self.patient} - {self.diagnosis}"