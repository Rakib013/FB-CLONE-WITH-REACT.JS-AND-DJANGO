from django.db import models
from django.contrib.auth.models import AbstractUser
from matplotlib.pyplot import cla


class User(AbstractUser):
    profile = models.ImageField(default="avatar.png", upload_to='user/profile/', blank=True, null=True)
    coverPic = models.ImageField(default="cover.png", upload_to='user/cover/', blank=True, null=True)
    nickName = models.CharField(max_length=200, blank=True, null=True)
    bio = models.TextField(default="", blank=True, null=True)
    email = models.EmailField(unique=True)
    friends = models.ManyToManyField('self', blank=True)
    requestedFriend = models.ManyToManyField('self', blank=True, related_name='requestedFriend')

    def __str__(self):
        return self.username

    
class Picture(models.Model):
    image = models.ImageField(upload_to='user/pictures/', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.image.name