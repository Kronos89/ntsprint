//import express an all methods from Incident Controller
import express from 'express'
import { createIncident, deleteIncident, getAllIncidents, getIncident, updateIncident } from '../controllers/IncidentController.js'

const router = express.Router()

router.get('/', getAllIncidents)
router.get('/:id', getIncident)
router.post('/', createIncident)
router.put('/:id', updateIncident)
router.delete('/:id', deleteIncident)

export default router
