from django.urls import path
from restaurant.views import CreateRestaurantsView, ListRestaurantsView, RetrieveUpdateDestroyRestaurantView


urlpatterns = [
    path('restaurants/new/', CreateRestaurantsView.as_view()),
    path('restaurants/', ListRestaurantsView.as_view()),
    path('restaurants/<int:pk>/', RetrieveUpdateDestroyRestaurantView.as_view()),
]
