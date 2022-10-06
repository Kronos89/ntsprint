import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

//URL of node-app
const URI = 'http://localhost:8000/incidents/'


//Show Incident
const CompShowIncidents = () => {
    
    const [incidents, setIncident] = useState([])
    useEffect( ()=>{
        getIncidents()
    },[])

    //Show all incidents
    const getIncidents = async () => {
        const res = await axios.get(URI)
        setIncident(res.data)
    }

    //Delete incident
    const deleteIncident = async (id) => {
       await axios.delete(`${URI}${id}`)
       getIncidents()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Problem</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { incidents.map ( (incident) => (
                                <tr key={ incident.id}>
                                    <td> { incident.title } </td>
                                    <td> { incident.problem } </td>
                                    <td>
                                        <Link to={`/edit/${incident.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteIncident(incident.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowIncidents