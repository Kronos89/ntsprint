//import express cors db and routes
import express  from "express"
import cors from 'cors'
import db from "./database/db.js"
import incidentRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/incidents', incidentRoutes)

try {
    await db.authenticate()
    console.log('Database connection sucessfull')
} catch (error) {
    console.log(`There are an error with database: ${error}`)
}


app.listen(8000, ()=>{
    console.log('Server UP and running in http://localhost:8000/')
})