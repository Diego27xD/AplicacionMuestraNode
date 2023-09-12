import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { routes } from "./src/routes/index.js";
import { createCategories } from "./src/libs/initial.js";
dotenv.config();
const PORT = process.env.PORT || 3005;

export const app = express();
app.set("port", PORT);
app.use(express.json());

// views
app.set("view engine", "ejs");

// process data form
app.use(
  express.urlencoded({
    extended: true,
  })
);

createCategories();

routes(app);
app.use(cors());
