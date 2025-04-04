from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer, CategoryProductsSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsList(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryProductsSerializer