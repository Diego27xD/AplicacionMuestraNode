import * as Controller from "../../../controller/category.controller.js";
import { Router } from "express";

const route = Router();

route.get("/", Controller.getAllCategories);
route.post("/", Controller.postCategory);

export default route;
