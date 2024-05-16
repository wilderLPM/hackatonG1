import express from "express";
import CONFIG_APP from "../config/index.js";
import cors from 'cors';

export const app = express();
app.use(cors({ origin: CONFIG_APP.ORIGIN }))

export const port = CONFIG_APP.PORT_SERVER;