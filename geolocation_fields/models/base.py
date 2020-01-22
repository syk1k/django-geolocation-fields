"""
This is the base class for all the Geometric fields we will be creating
"""
import geojson

class Point(geojson.Point):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)