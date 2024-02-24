import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
