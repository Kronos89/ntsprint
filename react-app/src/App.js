//CSS
import './App.css';

//Components to show create and edit Incident
import CompShowIncidents from './Incident/ShowIncident';
import CompCreateIncident from './Incident/CreateIncident';
import CompEditIncident from './Incident/EditIncident';

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowIncidents />} />
            <Route path='/create' element={ <CompCreateIncident />} />
            <Route path='/edit/:id' element={ <CompEditIncident />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
