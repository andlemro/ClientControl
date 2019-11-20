from django.db import models
from datetime import datetime

##################################################################################################


class Client(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=20)
    computer_brand = models.CharField(max_length=15)
    description = models.TextField()
    registration_date = models.DateField(default=datetime.now)
    maintenance_date = models.DateField()
    maintenance_required = models.BooleanField(default=False)

    # ---------------------------------------------------------------------------------------------
    def __str__(self):
        return '{}'.format(self.name)

##################################################################################################


class History(models.Model):
    client = models.ForeignKey(Client, on_delete=True)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=20)
    computer_brand = models.CharField(max_length=15)
    maintenance_date = models.DateTimeField()
    description = models.TextField()

    # ---------------------------------------------------------------------------------------------
    def __str__(self):
        return '{}'.format(self.maintenance_date)
