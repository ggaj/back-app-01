import { createConnection } from "typeorm";
import { Produto } from "../entity/Produto";

const cfg = require('../../ormconfig');

export default {
  createConnection: async () => {
    await createConnection(
      {
        type: cfg.type,
        host: cfg.host,
        port: cfg.port,
        username: cfg.username,
        password: cfg.password,
        database: cfg.database,
        synchronize: true,
        logging: false,
        entities: [
          Produto
        ]
      }
    );
    console.log('Database connected');
  }
}