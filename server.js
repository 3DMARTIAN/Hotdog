const http = require("http");
const { buildHotdog } = require("./hotdog");

const server = http.createServer((req, res) => {
if (req.url === "/hotdog") {
const hotdog = buildHotdog(["ketchup", "mustard"]);
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify(hotdog));
} else {
res.writeHead(404);
res.end("Not Found");
}
});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
