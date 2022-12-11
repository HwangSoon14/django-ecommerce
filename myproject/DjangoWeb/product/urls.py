from django.urls import path, include
# from .views import LatestProductList as views
from . import views

urlpatterns = [
    path('list-products/', views.ProductList.as_view()),
    path('latest-product/', views.LatestProductList.as_view()),
    path('products/search', views.search),
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view()),
    path('products/<slug:category_slug>/', views.CategoryDetail.as_view()),
]
