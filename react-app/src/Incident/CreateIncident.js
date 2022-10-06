//importing axios useState useNavigate
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//URL of node-app
const URI = 'http://localhost:8000/incidents/'

//Create Incident
const CompCreateIncident = () => {
    const [title, setTitle] = useState('')
    const [problem, setProblem] = useState('')
    const navigate = useNavigate()    
    
    //Save
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, problem:problem})
        navigate('/')
    }   

    //Form incident creation
    return (
        <div>
           <h3>Create POST</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Problem</label>
                    <textarea
                        value={problem}
                        onChange={ (e)=> setProblem(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Create</button>                  
           </form>
        </div>
    )
}

export default CompCreateIncident