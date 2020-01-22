"""
This file holds all our Geometric fields
"""
from django.db import models
from geolocation_fields.models import base


class PointField(base.Point, models.CharField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        kwargs['max_length'] = 104
        models.CharField.__init__(self, *args, **kwargs)

    
    def deconstruct(self):
        name, path, args, kwargs = super().deconstruct()
        del kwargs['max_length']
        return name, path, args, kwargs