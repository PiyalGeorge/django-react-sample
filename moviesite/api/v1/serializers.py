from movie.models import Movie
from django.template.defaultfilters import floatformat
from rest_framework import serializers


class MovieSerializer(serializers.HyperlinkedModelSerializer):

    rating = serializers.SerializerMethodField(required=False)

    class Meta:
        model = Movie
        fields = ('url', 'id', 'title', 'image', 'rating', 'synopsis')

    def get_rating(self, obj):
        rating = floatformat(obj.rating)
        return rating