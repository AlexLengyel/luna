from django.db.models import Avg
from rest_framework import serializers

from restaurant.models import Restaurant


class MainRestaurantSerializer(serializers.ModelSerializer):
    average_rating = serializers.SerializerMethodField(read_only=True)

    def get_average_rating(self, obj):
        return Restaurant.objects.filter(id=obj.id).aggregate(Avg('reviews__rating'))

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'street', 'city', 'zip', 'website',
                  'phone_number', 'email', 'price_level', 'image', 'created', 'modified', 'owner',
                  'average_rating', 'reviews', 'opening_hours', 'categories']
        read_only_fields = ['id', 'email' 'created', 'modified', 'owner', 'reviews', 'opening_hours',
                            'average_rating']
