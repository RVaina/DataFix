from django.urls import path
from .views import ImportFileViews

urlpatterns = [
    path("importFile/", ImportFileViews.as_view(), name="ImportFile"),
]