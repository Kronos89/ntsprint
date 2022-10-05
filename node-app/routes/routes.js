import express from 'express';
import { createIncident, deleteIncident, getAllIncidents, updateIncident } from '../controllers/IncidentController.js';

const router = express.Router()

router.get('/', getAllIncidents)
router.post('/:id', createIncident)
router.put('/:id', updateIncident)
router.delete('/:id', deleteIncident)

export default router