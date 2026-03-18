class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Making sound"

    def __str__(self):
        return f"{self.name} ({self.color}), {self.age} years old"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof woof"

    def fetch(self):
        return f"{self.name} is fetching the ball"


class Cat(Animal):
    def __init__(self, name, age, color, favorite_food):
        super().__init__(name, age, color)
        self.favorite_food = favorite_food

    def speak(self):
        return "Meow :3"

    def purr(self):
        return f"{self.name} is purring happily"