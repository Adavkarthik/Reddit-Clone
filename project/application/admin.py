from django.contrib import admin
from .models import comments,replies
# Register your models here.
admin.site.register(comments)
admin.site.register(replies)