//import Incident Model
import IncidentModel from "../models/IncidentModel.js";

//** CRUD **/

//ALL Incidents
export const getAllIncidents = async (req, res) => {
    try {
        const incidents = await IncidentModel.findAll()
        res.json(incidents)
    } catch (error) {
        res.json( { message: error.message } )
    }
}

//Only one Incident by id
export const getIncident = async (req, res) => {
    try {
        const incident = await IncidentModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(incident[0])
    } catch (error) {
        res.json( { message: error.message } )
    }
}

//Create Incident
export const createIncident = async (req, res) => {
    try {
       await IncidentModel.create(req.body)
       res.json({
           "message":"Incident creation successfull!"
       })
    } catch (error) {
        res.json( { message: error.message } )
    }
}

//Update Incident
export const updateIncident = async (req, res) => {
    try {
        await IncidentModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Incident update successfull"
        })
    } catch (error) {
        res.json( { message: error.message } )
    }
}

//Delete Incident
export const deleteIncident = async (req, res) => {
    try {
        await IncidentModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"Incident deleted sucessfull"
        })
    } catch (error) {
        res.json( { message: error.message } )
    }
}