b: setup.py
	python setup.py sdist

bdist_wheel: setup.py
	python setup.py sdist bdist_wheel

i: setup.py
	pip install dist/django-geolocation-fields-0.1.dev0.tar.gz


upload: setup.py
	twine upload dist/*

sample: setup.py
	python samples/main.py