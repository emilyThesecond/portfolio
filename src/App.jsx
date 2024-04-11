import React from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
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
        {/* <Contact /> */}
      </main>
      <footer>
        <Footer />

      </footer>

    </div>
  );
}

export default App;