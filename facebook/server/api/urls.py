from django.urls import path
from . import views


urlpatterns = [
    path("login/", views.AuthUser.as_view(), name="auth-user"),
    path("signup/", views.UserSignUp.as_view(), name="user-signup"),
    path("profile/", views.UserProfile.as_view(), name="user-profile"),
    path("particular/profile/<int:id>/", views.UserProfileParticular.as_view(), name="user-profile-particular"),
    path("post/like/<int:id>/", views.PostLike.as_view(), name="post-like"),
    path("posts/", views.PostsView.as_view(), name="user-post"),
    path("particularuser/posts/<int:id>/", views.ParticularUserPost.as_view(), name="user-post-particular"),
    path("post/view/<int:id>/", views.PostView.as_view(), name="post-view"),
    path("post/comment/<int:id>/", views.CommentView.as_view(), name="comment-view"),
    path("post/comment/", views.PostComment.as_view(), name="post-comment"),
    path("friend/request/<int:id>/", views.FriendRequest.as_view(), name="friend-request"),
    path("friend/accept/<int:id>/", views.FriendAccept.as_view(), name="friend-accept"),
]
