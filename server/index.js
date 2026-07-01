import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        status: "success",
        message: "Hello from native Node.js server!",
      }),
    );
    return;
  }

  res.writeHead(404);
  res.end(
    JSON.stringify({
      status: "fail",
      message: "Route not found",
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Server is running natively on http://localhost:${PORT}`);
});
