import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Cards key="General" category="general" />}/>
        <Route path='/Science' element={<Cards key="Science" category="Science"/>}/>
        <Route path='/Business' element={<Cards key="Business"category="Business"/>}/>
        <Route path='/Health' element={<Cards key="Health" category="Health"/>}/>
        <Route path='/Sports' element={<Cards key="Sports" category="Sports"/>}/>
        <Route path='/Entertainment' element={<Cards key="Entertainment" category="Entertainment"/>}/>
        <Route path='/Technology' element={<Cards key="Technology" category="Technology"/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
