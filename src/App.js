import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import NetFlixShow from './pages/NetFlixShow';
import Home from "./pages/Home";
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ScrollToTop />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/netflix-show" element={ <NetFlixShow/> } />
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
