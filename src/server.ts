import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import schema from './schema'
import expressPlayGround from "graphql-playground-middleware-express";

const app = express();

app.use("*", cors());
app.use(compression());

async function startServer() {
  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({ app });
}

startServer();

app.get("/", expressPlayGround({ endpoint: "/graphql" }));

const httpServer = createServer(app);

httpServer.listen({ port: 3000 }, () => {
  console.log("Example app listening on port 3000!");
});
