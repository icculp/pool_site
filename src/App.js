import React from 'react';
import './App.css';
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
        
            <Navigation />

            {showHome()}
            {showAbout()}

            <Footer />
        </div>
    );
}

export default App;
