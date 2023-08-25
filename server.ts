import express, { Request, Response } from "express";

import { config } from "dotenv";
config();

import cors from "cors";
import https from "https";
import http from "http";

import swagger_ui from "swagger-ui-express";

import routes from "./module/routes";

import connectToDb from "./db.config";
import socket_connection from "./module/socket.connection";
import openapi_docs from "./output.openapi.json";



const { LOCAL_PORT } = process.env;
const PORT = LOCAL_PORT;
console.log("rocess." , process.env.PORT);

(async () => {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  connectToDb();

  app.use('/user', routes);

  let openapi_options = { customSiteTitle: "Chat Example" };
  app.use(
    "/docs",
    swagger_ui.serve,
    swagger_ui.setup(openapi_docs, openapi_options)
  );

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!---------");
  });
  let server = http.createServer(app);
  await server.listen(process.env.PORT, () => {
    console.log(`Server running at port at3 ${process.env.PORT}...`);
  });
  socket_connection(server);
})();
