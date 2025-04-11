from django.db import models

# Create your models here.
class Publisher(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return self.name
    

class Book(models.Model):
    title = models.CharField(max_length=255)
    synopsis = models.TextField()
    price = models.FloatField()
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return self.name
