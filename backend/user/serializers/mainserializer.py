from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class MainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'location', 'phone_number',
                  'description', 'things_i_love', 'profile_picture', 'profile_banner', 'comments',
                  'liked_comments', 'user_reviews', 'liked_reviews', 'date_joined', 'last_login', 'owned_restaurants']
        read_only_fields = ['id', 'email', 'comments', 'liked_comments', 'user_reviews', 'liked_reviews',
                            'date_joined', 'last_login', 'owned_restaurants']