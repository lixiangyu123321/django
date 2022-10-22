from django.urls import path
from scales.views import listorder


urlpatterns = [
    path("order/", listorder)
]