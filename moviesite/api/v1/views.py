from django.template.defaultfilters import floatformat

from movie.models import Movie
from .serializers import MovieSerializer
from rest_framework import viewsets
from rest_framework.exceptions import APIException


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    # def perform_create(self, serializer=MovieSerializer):
    #     rating = self.request.data['rating']
    #     if float(rating)>float(10) or float(rating)<0:
    #         raise APIException({'rating': ["Rating should be between 0 and 10"]})
    #     else:
    #         rating = floatformat(rating)
    #         serializer.save(rating=rating)