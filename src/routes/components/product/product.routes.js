import * as Controller from "../../../controller/product.controller.js";
import { Router } from "express";

const route = Router();

route.get("/", Controller.getAllProducts);
route.post("/", Controller.saveProduct);
route.get("/show/:id", Controller.showProduct);
route.get("/delete/:id", Controller.deleteProduct);

export default route;
