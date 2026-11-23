from django.contrib import admin
from .models import Appointment


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "patient",
        "doctor",
        "appointment_date",
        "appointment_time",
        "appointment_type",
        "status",
    )

    search_fields = (
        "patient__first_name",
        "patient__last_name",
        "doctor__first_name",
        "doctor__last_name",
    )

    list_filter = (
        "status",
        "appointment_type",
        "appointment_date",
    )

    date_hierarchy = "appointment_date"