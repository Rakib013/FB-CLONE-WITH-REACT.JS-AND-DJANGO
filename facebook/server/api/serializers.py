from rest_framework import serializers
from rest_framework.authtoken.views import Token
from . models import *


class UserSerializer(serializers.ModelSerializer):
    requests = serializers.SerializerMethodField()
    friend = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ["id", "password", 
        "last_login", "is_superuser", 
        "username", "first_name", "last_name", 
        "is_staff", "is_active", "date_joined", "profile", "requests", 
        "coverPic", "nickName", "bio", "email", "groups", "user_permissions", "friends", "friend", "requestedFriend"]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return token.key
    
    def get_requests(self, obj):
        return UpdateUserSerializer(obj.requestedFriend, many=True).data

    def get_friend(self, obj):
        return UpdateUserSerializer(obj.friends, many=True).data


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "profile", "coverPic", "bio"]




class PostSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()
    reacted = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = [ "id", "profile", "user", "title", "content", "post", "react", "reacted", "created_at", "updated_at"]

    def get_profile(self, obj):
        return UserSerializer(obj.user, many=False).data
    
    def get_reacted(self, obj):
        return UserSerializer(obj.isReacted, many=True).data


class CommentSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = [ "id", "profile", "user", "post", "comment", "created_at", "updated_at"]
    
    def get_profile(self, obj):
        return UserSerializer(obj.user, many=False).data