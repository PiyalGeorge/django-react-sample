from django.views.generic import TemplateView


class IndexView(TemplateView):
    """
      Index View
    """
    template_name = 'index.html'