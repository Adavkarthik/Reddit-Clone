from rest_framework import serializers 
from django.contrib.auth.models import User
from .models import comments,replies
class userserializer(serializers.ModelSerializer):
    password2=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=["username","password","email","password2"]

        extra_kwargs={
            "password":{"write_only":True}
        }

    def validate(self,data):
        password=data["password"]
        password2=data["password2"]
        email=data["email"]

        if password!=password2:
            raise serializers.ValidationError("Password mismatch")
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("email already exists")
        return data
    
    def create(self,data):
        account=User.objects.create_user(username=data["username"],password=data["password"],email=data["email"])
        return account
    

class replyserializer(serializers.ModelSerializer):
    class Meta:
        model=replies
        fields=["reply","id"]
class commentserializer(serializers.ModelSerializer):
    all_comments_from_replies=replyserializer(many=True,read_only=True)
    class Meta:
        model=comments
        fields=["comment","all_comments_from_replies","id"]


class usersommentserializer(serializers.ModelSerializer):
    class Meta:
        model=comments
        fields=["comment"]
class usersreplyserializer(serializers.ModelSerializer):
    class Meta:
        model=replies
        fields=["reply"]

    
    