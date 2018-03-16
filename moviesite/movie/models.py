from autoslug import AutoSlugField
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.utils.text import slugify
from django.db.models import SlugField


class Movie(models.Model):
    '''
    Model for Movie
    '''

    title = models.CharField(_('Title'), max_length=200)
    synopsis = models.TextField(_('Synopsis'), blank=True, null=True)
    image = models.ImageField(_('Image'), upload_to='movie_poster', null=True, blank=True)
    rating = models.DecimalField(_('Rating'), decimal_places=1, max_digits=3, null=True, blank=True)
    release_date = models.DateField(_('Release Date'), null=True, blank=True)
    slug = AutoSlugField(_('Movie Slug'), populate_from='title', editable=True, blank=True, unique_with='title')
    slug = SlugField(_('Movie Slug'), unique=True)

    class Meta:
        verbose_name = _('Movie')
        verbose_name_plural = _('Movies')

    def __str__(self):
        return self.title

    def _get_unique_slug(self):
        slug = slugify(self.title)
        unique_slug = slug
        num = 1
        while Dcu.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(slug, num)
            num += 1
        return unique_slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._get_unique_slug()
        super().save()




