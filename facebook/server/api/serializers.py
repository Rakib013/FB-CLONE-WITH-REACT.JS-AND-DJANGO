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