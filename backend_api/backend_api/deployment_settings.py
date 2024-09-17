import os
from .settings import *
from .settings import BASE_DIR

ALLOWED_HOSTS = [os.environ['WEBSITE_HOSTNAME']]
CSRF_TRUSTED_ORIGINS = ['https://' + os.environ['WEBSITE_HOSTNAME']]
DEBUG = False

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    'https://' + os.environ['WEBSITE_HOSTNAME']
]

STORAGES = {
       "default":{
         "BACKEND": "django.core.files.storage.FileSystemStorage",
       },
       "staticfiles": {
           "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
       },
}

CONNECTION = os.environ['AZURE_POST_CONNECTION_STRING']
CONNECTION_STR = {pairs.split('=')[0]:pairs.split('=')[1] for pairs in CONNECTION.split(' ')}


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': CONNECTION_STR['dbname'],
        'USER': CONNECTION_STR['username'],
        'PASSWORD': CONNECTION_STR['password'],
        'HOST': CONNECTION_STR['host'],
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

SECRET_KEY = os.environ['SECRET_KEY']