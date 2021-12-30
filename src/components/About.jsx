import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";


function About() {
  return (
    <div className="about">
      <Particles options={particlesOptions}/>
      <header className="App-header">
      <iframe title="info" src="https://stakada.io/embed/stats?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2&custom_metric_value=100%&custom_metric_caption=Awesomeness" width="100%" height="400" style={{"max-width":"750px"}} frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
            <h4>Additional Pool Info:</h4>
                    <a href="https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
                   
                    <a href="https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
                   
                    <a href="https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
                  
                    <a href="https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adapools</a>
                    <br />
      </header>
    </div>
  );
}

export default About;