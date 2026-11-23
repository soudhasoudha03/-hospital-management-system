from django.contrib import admin
from .models import Bill


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "invoice_number",
        "patient",
        "total_amount",
        "paid_amount",
        "payment_status",
        "payment_method",
        "due_date",
    )

    search_fields = (
        "invoice_number",
        "patient__first_name",
        "patient__last_name",
    )

    list_filter = (
        "payment_status",
        "payment_method",
        "due_date",
    )

    date_hierarchy = "created_at"