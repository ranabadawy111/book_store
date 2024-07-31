import dotenv from "dotenv";
dotenv.config();
import express from "express";
import * as allRoutes from "./modules/index.routes.js";
import connection from "./DB/connections.js";
import logger from "./middlewares/logger.js";
import { errorHanlder, notFound } from "./middlewares/errors.js";
import path from "path";
import helmet from "helmet";
import cors from "cors";

// Connection To Database
connection();

// Init App
const server = express();

// Apply Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(logger);

// Static Folder
server.use(express.static("images"));

// Helmet
server.use(helmet());

// Cors Policy
server.use(cors())

// Set View Engine
server.set('view engine', 'ejs');


// routes
const baseURL = "/api/v1";
server.use(`${baseURL}/books`, allRoutes.bookRouter);
server.use(`${baseURL}/authors`, allRoutes.authorRouter);
server.use(`${baseURL}/auth`, allRoutes.authRouter);
server.use(`${baseURL}/users`, allRoutes.userRouter);
server.use(`${baseURL}/upload`, allRoutes.uploadRouter);
// server.use(`${baseURL}/password`, allRoutes.messageRouter);

// Error Hanlder Middleware
server.use(notFound);
server.use(errorHanlder);

// Error Hanlder Middleware
server.use(notFound);
server.use(errorHanlder);

// Running The Server
server.listen(3000, function(){
    console.log("server is running!")
});