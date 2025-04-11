from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Car, CarCategory
from .serializers import CarSerializer, CarCategorySerializer, CarCategoryCarsSerializer

class CarList(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CarCategoryList(generics.ListCreateAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategorySerializer

class CarCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarCategory.objects.all()
    serializer_class = CarCategoryCarsSerializer

class CarCategoryCarsList(generics.RetrieveAPIView):
    serializer_class = CarSerializer
    def get_queryset(self):
        category_id=self.kwargs['pk']
        
        return Car.objects.filter(category_id=category_id)