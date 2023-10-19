from django.db import models

# Create your models here.
class Log(models.Model):
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=20)
    role = models.CharField(max_length=10)
    def __str__(self):
        return self.username
    
class Student(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=40, unique=True)
    phonenumber = models.CharField(max_length=10, unique=True)
    place = models.CharField(max_length=20)
    post = models.CharField(max_length=20)
    pincode = models.CharField(max_length=6)
    log_id = models.OneToOneField(Log, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)
    def __str__(self):
        return self.name
    
class Teachers(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=40, unique=True)
    phonenumber = models.CharField(max_length=10, unique=True)
    address = models.CharField(max_length=40)
    pincode = models.CharField(max_length=40)
    subject = models.CharField(max_length=20)
    log_id = models.OneToOneField(Log, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)
    def __str__(self):
        return self.name