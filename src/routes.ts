import { ProdutoController } from "./controller/ProdutoController";

export const Routes = [
    { method: "get", route: "/produtos", controller: ProdutoController, action: "all" },
    { method: "get", route: "/produtos/:uid", controller: ProdutoController, action: "one" },
    { method: "post", route: "/produtos", controller: ProdutoController, action: "save" },
    { method: "delete", route: "/produtos/:uid", controller: ProdutoController, action: "remove" },
]