from django.contrib import admin
from .models import Client
from .models import History

admin.site.register(Client)
admin.site.register(History)