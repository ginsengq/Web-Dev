from rest_framework import serializers
from .models import Car, CarCategory

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'brand', 'model', 'price_per_day', 'available_units', 'is_available', 'category']

class CarCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CarCategory
        fields = ['id', 'name']

class CarCategoryCarsSerializer(serializers.ModelSerializer):
    cars = CarSerializer(many=True, read_only=True)
    
    class Meta:
        model = CarCategory
        fields = ['id', 'name', 'cars']
