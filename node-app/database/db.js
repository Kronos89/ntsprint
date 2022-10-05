import { Sequelize } from "sequelize";

const db = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 6,
      min: 0,
      acquire: 20000,
      idle: 20000
    }
})

export default db