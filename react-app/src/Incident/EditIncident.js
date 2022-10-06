//import axios useEffect useState useNavigate useParams
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//URL of node-app
const URI = 'http://localhost:8000/incidents/'

//Edit Incident
const CompEditIncident = () => {
    const [title, setTitle] = useState('')    
    const [problem, setProblem] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //Update procedure
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            problem: problem
        })
        navigate('/')
    }

    useEffect( ()=> {
        getIncidentById()
    },[])

    const getIncidentById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setProblem(res.data.problem)
    }

    return (
        <div>
        <h3>Edit Incident</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Problem</label>
                <textarea
                    value={problem}
                    onChange={ (e)=> setProblem(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditIncident