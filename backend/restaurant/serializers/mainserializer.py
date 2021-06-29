from rest_framework import serializers
from restaurant.models import Restaurant


class MainRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'street', 'city', 'zip', 'website',
                  'phone_number', 'email', 'price_level', 'image', 'created', 'modified', 'owner', 'reviews',
                  'opening_hours', 'categories']
        read_only_fields = ['id', 'email' 'created', 'modified', 'owner', 'reviews', 'opening_hours', 'categories']
