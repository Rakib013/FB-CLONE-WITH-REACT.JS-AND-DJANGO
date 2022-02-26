from django.contrib import admin
from . models import *

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "email", "nickName", "bio"]

admin.site.register(Picture)

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ["user", "title", "react", "created_at", "updated_at"]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["user", "post", "comment", "react", "created_at", "updated_at"]