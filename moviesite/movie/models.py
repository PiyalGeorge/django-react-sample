from django.db import models
from django.utils.translation import ugettext_lazy as _


class Movie(models.Model):
    '''
    Model for Movie
    '''

    title = models.CharField(_('Title'), max_length=200)
    synopsis = models.TextField(_('Synopsis'), blank=True, null=True)
    image = models.ImageField(_('Image'), upload_to='movie_poster', null=True, blank=True)
    rating = models.DecimalField(_('Rating'), decimal_places=1, max_digits=3, null=True, blank=True)
    release_date = models.DateField(_('Release Date'), null=True, blank=True)

    class Meta:
        verbose_name = _('Movie')
        verbose_name_plural = _('Movies')

    def __str__(self):
        return self.title
