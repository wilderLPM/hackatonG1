import express, { Express } from "express";
import CONFIG_APP from "../config/index.js";
import cors from 'cors';
import bodyParser from "body-parser";

export const app: Express = express();

app.use(cors({ origin: CONFIG_APP.ORIGIN }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export const port: string = CONFIG_APP.PORT_SERVER;