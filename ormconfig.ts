module.exports = {
   "type": "postgres",
   host: process.env.HOST || "localhost",
   port: 5432,
   username: process.env.USERNAME || "postgres",
   password: process.env.PASSWORD || "postgres",
   database: process.env.DATABASE || "postgres",
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