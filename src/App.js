import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import {
  Navigation,
  Footer,
  Home,
  About,
} from "./components";


const showHome = () => {
  if (window.location.pathname === "/") {
    return <Home />
  }
}

const showAbout = () => {
  if (window.location.pathname === "/about") {
    return <About />
  }
}



function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <Navigation />

            {showHome()}
            {showAbout()}

            <Footer />
        </div>
    );
}

export default App;
