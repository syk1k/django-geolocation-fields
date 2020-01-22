b: setup.py
	python setup.py sdist

i: setup.py
	pip install dist/django-geolocation-fields-0.1.0.tar.gz

sample: setup.py
	python samples/main.py