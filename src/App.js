import ToDo from "./Components/ToDo";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListDelete from './Components/ListDelete';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={ <ToDo/>}/>
            <Route path='/post/:id' element={<ListDelete/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
