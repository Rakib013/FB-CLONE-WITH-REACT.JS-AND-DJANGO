from rest_framework import serializers
from rest_framework.authtoken.views import Token
from . models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return token.key


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