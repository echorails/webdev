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


"""




class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.all()



Product.objects.all().order_by('price')      # ↑ по возрастанию
Product.objects.all().order_by('-price')     # ↓ по убыванию
Product.objects.all().order_by('price', 'name')  # по двум полям



Product.objects.filter(is_active=True)                    # только активные
Product.objects.filter(price__gt=10000)                  # > 10000
Product.objects.filter(price__lt=10000)                  # < 10000
Product.objects.filter(price__gte=10000, price__lte=50000)  # диапазон
Product.objects.filter(category_id=1)                    # по категории



Product.objects.filter(name__icontains='phone')          # поиск по имени



Product.objects.filter(is_active=True).order_by('-price')  # фильтр + сортировка



Product.objects.all()[:5]                                # только 5 товаров



Product.objects.count()                                  # количество товаров



Product.objects.filter(id=1).first()                     # не падает


рандомный продукс
Product.objects.order_by('?').first()



Product.objects.values('name', 'price')

форигн кий 

category = Category.objects.get(id=1)
category.products.all()                                  # все продукты категории



# (в serializers.py)
# category_name = serializers.CharField(source='category.name', read_only=True)


пустой рез
products = Product.objects.all()
if not products.exists():
    return Response([])



class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()

        min_price = self.request.query_params.get('min_price')
        name = self.request.query_params.get('name')

        if min_price:
            queryset = queryset.filter(price__gte=min_price)

        if name:
            queryset = queryset.filter(name__icontains=name)

        return queryset



class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_active=True).order_by('-price')[:5]
"""


