import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Show  from './components/ShowElectrodomestico'
import Show1 from './components/showRefrigeradora'
import Show2 from './components/showCocina'
import Show3 from './components/showMain'
function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/Electrodomestico" element={<Show/>} />
       <Route path="/Refrigeradora" element={<Show1/>} />
       <Route path="/Cocina" element={<Show2/>} />
       <Route path="/" element={<Show3/>} />
      </Routes>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}




export default App;
