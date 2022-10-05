//DB import and sequelize
import db from "../database/db.js";
import { DataTypes } from "sequelize";

 const IncidentModel = db.define('incident', {
     title: { type: DataTypes.STRING },
     problem: { type: DataTypes.STRING },
     createdAt: { type: DataTypes.DATE },
     updatedAt: { type: DataTypes.DATE },
 })

export default IncidentModel