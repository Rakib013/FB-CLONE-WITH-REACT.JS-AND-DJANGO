from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import Token
from django.contrib.auth import authenticate, login
from . serializers import *
from rest_framework import status


class AuthUser(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(request, email=email, password=password)

        if user:
            login(request, user)
            if Token.objects.filter(user=user).exists():
                token = Token.objects.get(user=user).key
            else:
                token = Token.objects.create(user=user).key
            return Response({"Token": token}, status=status.HTTP_200_OK)
        else:
            return Response("User doesn't exist", status=status.HTTP_204_NO_CONTENT)


class UserSignUp(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response("Signup succesfully completed", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProfile(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)