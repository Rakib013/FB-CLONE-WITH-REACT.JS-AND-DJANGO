from html5lib import serialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import Token
from django.contrib.auth import authenticate, login
from sqlalchemy import delete, false
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


# Get/Update -> Profile API View
class UserProfile(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = request.user
        serializer = UpdateUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Profile updated successfully", status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class PostLike(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, id):
        post = Post.objects.get(id=id)
        if post.isReacted.filter(id=request.user.id).exists():
            post.isReacted.remove(request.user)
            post.react -= 1
            post.save()
            return Response("Post successfully disliked", status=status.HTTP_200_OK)
        else:
            post.isReacted.add(request.user)
            post.react += 1
            post.save()
            return Response("Post successfully liked", status=status.HTTP_200_OK)
        


# Particular Post API View
class ParticularUserPost(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request, id):
        user = User.objects.get(id=id)
        data = user.post_set.all()
        serializer = PostSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


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



# Friend Request, Accept, Reject, Block, Unblock API View
class FriendRequest(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, id):
        user = request.user
        friend = User.objects.get(id=id)
        if user.friends.filter(id=friend.id).exists():
            return Response("Already friend", status=status.HTTP_200_OK)
        else:
            user.requestedFriend.add(friend)
            user.save()
            return Response("Friend request sent", status=status.HTTP_200_OK)
    
    def delete(self, request, id):
        user = request.user
        friend = User.objects.get(id=id)
        if user.requestedFriend.filter(id=friend.id).exists():
            user.requestedFriend.remove(friend)
            user.save()
            return Response("Friend request rejected", status=status.HTTP_200_OK)
        else:
            return Response("No friend request", status=status.HTTP_200_OK)


class FriendAccept(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request, id):
        user = request.user
        friend = User.objects.get(id=id)
        if user.requestedFriend.filter(id=friend.id).exists():
            user.friends.add(friend)
            user.requestedFriend.remove(friend)
            user.save()
            return Response("Friend request accepted", status=status.HTTP_200_OK)
        else:
            return Response("Friend request not found", status=status.HTTP_204_NO_CONTENT)

    def delete(self, request, id):
        user = request.user
        friend = User.objects.get(id=id)
        if user.friends.filter(id=friend.id).exists():
            user.friends.remove(friend)
            user.save()
            return Response("Friend has been deleted succesfully!", status=status.HTTP_200_OK)
        else:
            return Response("Friend not found", status=status.HTTP_204_NO_CONTENT)