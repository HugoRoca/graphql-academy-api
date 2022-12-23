import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";

const app = express();

app.use("*", cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const httpServer = createServer(app);

httpServer.listen({ port: 3000 }, () => {
  console.log("Example app listening on port 3000!");
});
