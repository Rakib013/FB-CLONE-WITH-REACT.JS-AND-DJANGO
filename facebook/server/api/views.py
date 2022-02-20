from html5lib import serialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import Token
from django.contrib.auth import authenticate, login
from . serializers import *
from rest_framework import status


# Login API View
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


# Signup API View
class UserSignUp(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Signup succesfully completed", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Profile API View
class UserProfile(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Particular User Profile API View
class UserProfileParticular(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, id):
        user = User.objects.get(id=id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# All Posts API View
class PostsView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        data = Post.objects.all()
        serializer = PostSerializer(data, many=True)
        user_post = Post.objects.filter(user=request.user)
        user_post_serializer = PostSerializer(user_post, many=True)
        return Response({"All": serializer.data, "UserPost": user_post_serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Post successfully created", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Single Post API View
class PostView(APIView):
    def get(self, request, id):
        data = Post.objects.get(id=id)
        serializer = PostSerializer(data)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class CommentView(APIView):
    def get(self, request, id):
        data = Post.objects.get(id=id)
        serializer = CommentSerializer(data.comment_set.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PostComment(APIView):
    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Comment successfully created", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



