function buildHotdog() {
const bun = document.getElementById("bun").value;
const sausage = document.getElementById("sausage").value;

const toppingNodes = document.querySelectorAll("#toppings input:checked");
const toppings = Array.from(toppingNodes).map(t => t.value);

const hotdog = {
bun,
sausage,
toppings,
description: `Hotdog with ${sausage} sausage, ${bun} bun, and ${toppings.join(", ") || "no toppings"}`
};

document.getElementById("output").textContent =
JSON.stringify(hotdog, null, 2);
}
