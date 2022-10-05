//imports
import IncidentModel from "../models/IncidentModel.js"

//all incidents form database
export const getAllIncidents = async (req, res) => {
    try {
        const incidents = await IncidentModel.findAll()
        res.json(incidents)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//create incident
export const createIncident = async (req, res) => {
    try {
        await IncidentModel.create(req.body)
        res.json({
            "message":"Incident creation successfull"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//update incident
export const updateIncident = async (req, res) => {
    try {
        await IncidentModel.update(req.body, {
            where: { id: req.params.id }
        })

        res.json({
            "message":"Incident update successfull"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//delete incident
export const deleteIncident = async (req, res) => {
    try {
        await IncidentModel.destroy(req.body, {
            where: { id: req.params.id }
        })

        res.json({
            "message":"Incident update successfull"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}