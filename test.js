const { buildHotdog } = require("./hotdog");

function testBuild() {
const result = buildHotdog(["onion"]);
if (!result.toppings.includes("onion")) {
throw new Error("Test failed: topping missing");
}
console.log("Test passed");
}

testBuild();
