from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import register,commentview,commentviewsingle,replyview,replyviewsimgle
urlpatterns = [
    path("login",TokenObtainPairView.as_view(),name="Login"),
    path("refreshtoken",TokenObtainPairView.as_view(),name="Refreshtoken"),
    path("register",register.as_view(),name="Register"),
    path('comment',commentview.as_view(),name="Comments"),
    path('comment/<int:comment_id>',commentviewsingle.as_view(),name="Comments"),
    path('comment/<int:comment_id>/reply',replyview.as_view(),name="Comments"),
    path('comment/<int:comment_id>/reply/<int:reply_id>',replyviewsimgle.as_view(),name="Comments"),
]