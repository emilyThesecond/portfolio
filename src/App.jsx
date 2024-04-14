import React from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import './App.css'

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
        <Skills />
        {/* <Resume /> */}
      </main>
      <footer>
        <Footer />

      </footer>

    </div>
  );
}

export default App;