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
                    <iframe title="info" src="https://stakada.io/embed/stats?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2&custom_metric_value=100%&custom_metric_caption=Awesomeness" width="100%" height="400" style={{"background":"#FFFFFF","max-width":"750px"}} frameborder="2" scrolling="no"></iframe>
					<br />
					<iframe style={{"background": "#FFFFFF"}} title="How-to iframe" credit="0" src="https://stakada.io/embed/howto?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" width="100%" height="680" frameborder="1" scrolling="no"></iframe>
					<br />
					<iframe title="epoch counter" src="https://stakada.io/embed/epoch" frameborder="2" width="100%" height="60" style={{"max-width":"750px","background":"#FFFFFF"}}></iframe>
					<br />
					<a href="https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
					<br />
					<a href="https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
					<br />
					<a href="https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
					<br />
					<a href="https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adapools</a>
                </p>
            </header>
        </div>
    );
}

export default App;
