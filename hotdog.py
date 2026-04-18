class Hotdog:
def **init**(self, bun="soft", sausage="beef"):
self.bun = bun
self.sausage = sausage
self.toppings = []

```
def add_topping(self, topping):
    self.toppings.append(topping)

def to_dict(self):
    return {
        "bun": self.bun,
        "sausage": self.sausage,
        "toppings": self.toppings
    }
```

if **name** == "**main**":
h = Hotdog()
h.add_topping("ketchup")
print(h.to_dict())
