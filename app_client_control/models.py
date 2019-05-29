from django.db import models
from datetime import datetime

##################################################################################################
class Client(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15, blank=True, null=True)
    registration_date = models.DateTimeField(default=datetime.now)
    computer_brand = models.CharField(max_length=15, blank=True, null=True)
    maintenance_date = models.DateTimeField()
    description = models.TextField()

	#---------------------------------------------------------------------------------------------
    def __str__ (self):
        return '{}'.format(self.name)