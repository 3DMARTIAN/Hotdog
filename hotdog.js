class Hotdog {
constructor(toppings = []) {
this.base = {
bun: "soft",
sausage: "beef"
};
this.toppings = toppings;
}

addTopping(topping) {
this.toppings.push(topping);
}

describe() {
return {
...this.base,
toppings: this.toppings,
description: `Hotdog with ${this.toppings.join(", ")}`
};
}
}

function buildHotdog(toppings) {
const h = new Hotdog(toppings);
return h.describe();
}

module.exports = { Hotdog, buildHotdog };
