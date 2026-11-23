from django.contrib import admin
from .models import MedicalRecord


@admin.register(MedicalRecord)
class MedicalRecordAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "patient",
        "doctor",
        "record_date",
        "diagnosis",
        "created_at",
    )

    search_fields = (
        "patient__first_name",
        "patient__last_name",
        "doctor__first_name",
        "doctor__last_name",
        "diagnosis",
    )

    list_filter = (
        "record_date",
        "doctor",
    )

    date_hierarchy = "record_date"