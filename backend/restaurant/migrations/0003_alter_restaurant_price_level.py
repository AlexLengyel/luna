# Generated by Django 3.2 on 2021-06-29 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0002_restaurant_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='price_level',
            field=models.IntegerField(choices=[(1, '$'), (2, '$$'), (3, '$$$')]),
        ),
    ]