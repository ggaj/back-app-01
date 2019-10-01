module.exports = {
   "type": "postgres",
   host: "ec2-107-22-160-185.compute-1.amazonaws.com",
   port: 5432,
   username: "ibvaqxgbjjplro",
   password: "442e41c17000f9032010e7aa61a5b1fbecb9990d515949fca26d0af9f64fa6e3",
   database: "d7512gmih12op2",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}