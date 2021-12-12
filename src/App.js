import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Cardano Staking pool for Cody and Ian
                </p>
                <p>
                    Our website will be awesome
					
					https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators
					
					https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2
					
					https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators
					
					https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://particles.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
            </header>
        </div>
    );
}

export default App;
