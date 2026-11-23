from django.db import models


class Doctor(models.Model):

    class Gender(models.TextChoices):
        MALE = "Male", "Male"
        FEMALE = "Female", "Female"
        OTHER = "Other", "Other"

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    specialization = models.CharField(max_length=100)
    qualification = models.CharField(max_length=150)

    gender = models.CharField(
        max_length=10,
        choices=Gender.choices
    )

    phone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)

    experience_years = models.PositiveIntegerField(default=0)

    consultation_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    available_days = models.CharField(
        max_length=150,
        blank=True
    )

    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["first_name", "last_name"]

    def __str__(self):
        return f"Dr. {self.first_name} {self.last_name}"