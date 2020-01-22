from django.forms import widgets

class PointWidget(widgets.Input):
    input_type = 'text'
    template_name = 'widgets/point.html'