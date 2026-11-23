from django.contrib import admin
from .models import Doctor


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "first_name",
        "last_name",
        "specialization",
        "phone",
        "experience_years",
        "consultation_fee",
        "is_available",
    )

    search_fields = (
        "first_name",
        "last_name",
        "specialization",
        "email",
    )

    list_filter = (
        "specialization",
        "gender",
        "is_available",
    )