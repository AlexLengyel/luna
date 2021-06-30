# Generated by Django 3.2 on 2021-06-30 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0004_alter_restaurant_price_level'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='price_level',
            field=models.IntegerField(choices=[(1, '$'), (2, '$$'), (3, '$$$')], max_length=3),
        ),
    ]