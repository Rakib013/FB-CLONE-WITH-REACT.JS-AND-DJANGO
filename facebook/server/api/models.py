from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from sqlalchemy import null


class User(AbstractUser):
    profile = models.ImageField(default="avatar.png", upload_to='user/profile/', blank=True, null=True)
    coverPic = models.ImageField(default="cover.png", upload_to='user/cover/', blank=True, null=True)
    nickName = models.CharField(max_length=200, blank=True, null=True)
    bio = models.TextField(default="", blank=True, null=True)
    email = models.EmailField(unique=True)
    friends = models.ManyToManyField('self', blank=True)
    requestedFriend = models.ManyToManyField('self', blank=True, related_name='requestedFriend')

    objects = UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

    
class Picture(models.Model):
    image = models.ImageField(upload_to='user/pictures/', blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.image.name


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(default="", blank=True, null=True)
    content = models.TextField(default="", blank=True, null=True)
    post = models.ImageField(upload_to='user/post/', blank=True, null=True)
    react = models.IntegerField(default=0)
    isReacted = models.ManyToManyField(User, blank=True, related_name='isReacted')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment = models.TextField()
    react = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.comment[:15]