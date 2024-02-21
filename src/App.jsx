import React from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import './App.css'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div id='root'>
      <nav>
        <Nav />
      </nav>
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;