django-geolocation-fields
-------------------------
A Django app to facilitate the manipulation of Geolocation objects in a GeoDjango app without using a spatial database.

Detailed documentation is in the "docs" directory.

**Stable version:** [django-geolocation-fields==0.1.8](https://pypi.org/project/django-geolocation-fields/)  
**Documentation:** [django-geolocation-fields](https://django-geolocation-fields.readthedocs.io/en/latest/)  
**Licence:** MIT  


Status
------
[![Build Status](https://travis-ci.org/syk1k/django-geolocation-fields.svg?branch=master)](https://travis-ci.org/syk1k/django-geolocation-fields)


Important note
--------------
The PolygonField is not working yet, so beware

Quick start
-----------

```bash
$ pip install django-geolocation-fields
```


The project is still in development

Here is an example that uses it https://github.com/syk1k/django-geolocation

1. Add "geolocation_fields" to your INSTALLED_APPS setting like this:
    ```python
    INSTALLED_APPS = [
        #...
        'geolocation_fields',
    ]
    ```

2. Add a PointField to a model:
    ```python
    from geolocation_fields.models import fields
    from django.db import models
    
    class MyModels(models.Model):
        # Some fields  
        field_name = fields.PointField(verbose_name='field_name')
        # Some fields
    ```

3. Configurations 
    To have more control over the package, you can canfigure it yourself

    By default the PointField's widget only display the map, 
    you can also chose to display the editable input field in the settings
    ```python
    GEOLOCATION_FIELDS = {
        'display_input': True, # Display the input field. False to remove
    }
    ```

    This version of the package integrate leaflet only.
    Here is the default configuration for the fields (PointField for the moment).
    The configurations uses leaflet Map options. Check the leafletJS 
    [doc here](https://leafletjs.com/)
    ```python
    GEOLOCATION_FIELDS = {
        "provider": "leaflet", # Two provider: Leaflet, Mapbox
        "center" : [0,0],
        "zoom": 12,
        'display_input': False,
    }


Screenshots
-----------

1. With the input field displayed

![with_input](./images/leaflet_map_with_input.png)

2. Without input field

![without_input](./images/leaflet_map_without_input.png)


Contributions
-------------

* Project requirements:  
1. Django>=2 <=2.2.12
2. Sphinx == 3.0.3 

* Generate the package

```bash
$ python setup.py sdist
```