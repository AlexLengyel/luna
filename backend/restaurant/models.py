from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import RegexValidator
from comment.models import Comment
from review.models import Review

User = get_user_model()


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'

PRICE_LEVEL = [
  (1, "$"),
  (2, "$$"),
  (3, "$$$")
]


class Restaurant(models.Model):
    name = models.CharField(max_length=20)
    category = models.JSONField(blank=True, default=list,)
    country = models.CharField(max_length=20)
    street = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    zip = models.PositiveIntegerField(max_length=11)
    website = models.URLField(max_length=100, blank=True, null=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. "
                                         "From 9 up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    email = models.EmailField(unique=True)
    price_level = models.IntegerField(choices=PRICE_LEVEL, blank=True, default=0)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
