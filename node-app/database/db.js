//importing sequelize db managment
import { Sequelize } from 'sequelize'

const db = new Sequelize('database', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db