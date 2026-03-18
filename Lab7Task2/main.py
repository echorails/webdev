from models import Dog, Cat

pets = []

dog1 = Dog("bobik", 3, "brown", "Labrador")
cat1 = Cat("zhenya", 2, "gray", "fish")

pets.append(dog1)
pets.append(cat1)

for pet in pets:
    print(pet)
    print(pet.speak())
    if isinstance(pet, Dog):
        print(pet.fetch())
    elif isinstance(pet, Cat):
        print(pet.purr())
