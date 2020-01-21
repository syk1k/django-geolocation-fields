build: setup.py
	python setup.py sdist

install: setup.py
	pip install dist/django-geolocation-fields-0.1.0.tar.gz