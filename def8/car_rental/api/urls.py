from django.urls import path
from . import views

urlpatterns = [
    path('categories/<int:pk>/', views.CarCategoryDetail.as_view(), name='car-detail'),
    path('categories/', views.CarCategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', views.CarCategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:pk>/cars/', views.CarCategoryCarsList.as_view(), name='category-products'),
]