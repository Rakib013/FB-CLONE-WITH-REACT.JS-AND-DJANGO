from django.urls import path
from . import views


urlpatterns = [
    path("login/", views.AuthUser.as_view(), name="auth-user"),
    path("signup/", views.UserSignUp.as_view(), name="user-signup"),
]
