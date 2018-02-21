from django.conf.urls import url, include
from .views import MovieViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]