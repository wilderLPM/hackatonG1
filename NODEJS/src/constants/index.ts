import express from "express";
import CONFIG_APP from "../config/index.js";

export const app = express();
export const port = CONFIG_APP.PORT_SERVER;