import { ProductRouter, CategoryRouter } from "./components/index.js";
const listRouter = [
  ["/view/products", ProductRouter],
  ["/view/categories", CategoryRouter],
];

export const routes = (app) => {
  listRouter.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
