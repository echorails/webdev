from django.contrib import admin
from .models import Product, Category

admin.site.register(Product)
admin.site.register(Category)

# echotrails da_ten@kbtu.kz 123123

# cd Desktop\lab7web\shop_back

# python manage.py runserver

""" 
http://127.0.0.1:8000/api/products/
http://127.0.0.1:8000/api/products/1/
http://127.0.0.1:8000/api/categories/
http://127.0.0.1:8000/api/categories/1/
http://127.0.0.1:8000/api/categories/1/products/ 

"""