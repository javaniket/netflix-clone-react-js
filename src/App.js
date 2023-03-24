import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Home';
import NetFlixShow from './NetFlixShow';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/netflix-show" element={ <NetFlixShow/> } />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
