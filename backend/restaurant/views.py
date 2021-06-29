from rest_framework import filters
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

from luna_backend.permissions import IsOwnerOrReadOnly
from restaurant.models import Restaurant
from restaurant.serializers.mainserializer import MainRestaurantSerializer

User = get_user_model()


class CreateRestaurantsView(CreateAPIView):
    """
        post:
        Create a Restaurant

        Body must contain:
        - name, country, street, city, zip, email,
    """
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            serializer.save(owner=self.request.user)
        except KeyError:
            serializer.save(owner=self.request.user)


class ListRestaurantsView(ListAPIView):
    """
        get:
        List all / searches restaurant

        Use-case:
        - Base-URL: returns all restaurants, with optional pagination
            - for pagination, you must include limit and offset parameters in url

        - Search-URL: Searches posts by 'name', 'country', 'street', 'city', 'zip', 'email' and 'price_level'.
            - must include 'search' parameter in url
                - ex:
                https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/?search=apple

        - Combination: Adds pagination and search functionality together
            - ex:
            https://luna-sagittarius.propulsion-learn.ch/backend/api/restaurants/?search=apple&limit=25&offset=0
    """
    pagination_class = LimitOffsetPagination
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'country', 'street', 'city', 'zip', 'email', 'price_level']


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    permission_classes = [IsOwnerOrReadOnly]
