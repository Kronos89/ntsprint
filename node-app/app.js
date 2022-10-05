import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import IncidentRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json)
app.use('/incident', IncidentRoutes)

try {
  await db.authenticate()
  console.log("Succesfull database connection")
} catch (error) {
  console.log(`Error:", ${ error }`)
}

app.get('/', (req, res) => {
  res.send("Its working")
})

