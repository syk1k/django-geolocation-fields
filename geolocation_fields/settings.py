from django.conf import settings


# Check to see if the GEOLOCATION_FIELD is provided in the settings
try:
    GEOLOCATION_FIELD = settings.GEOLOCATION_FIELD
except:
    GEOLOCATION_FIELD = {
        "map_provider": "leaflet", # Two provider: Leaflet, Mapbox
        "center" : [0,0],
        "zoom": 12,
    }