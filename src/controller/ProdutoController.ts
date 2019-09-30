import { BaseController } from "./BaseController";
import { Produto } from "../entity/Produto";
import { Request } from 'express';

export class ProdutoController extends BaseController<Produto> {

    constructor() {
      super(Produto, true);
    }
    

    async save(request: Request) {

      let _produto = <Produto>request.body;
  
      super.isRequired(_produto.nome, 'O nome é obrigatório');
      super.isRequired(_produto.preco, 'A foto é obrigatória');
  
      return super.save(_produto, request);
  
    }
}