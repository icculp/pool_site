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
            <h4>CNDL Pool Info (Mainnet):</h4>
                    <a href="https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
                   
                    <a href="https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
                   
                    <a href="https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
                  
                    <a href="https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adapools</a>

                    <a href="https://adastat.net/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adastat</a>

                    <a href="https://poolpeek.com/#/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">poolpeek</a>
                    
                    <br />
            <h4>ICCC Pool Info (Testnet):</h4>
                    <a href="https://testnet.cardanoscan.io/pool/6f60acc09987507409148f6985d20a8e2a90dc9ebbac444aa837828c" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
                   
                    <a href="https://testnet.adatools.io/pools/6f60acc09987507409148f6985d20a8e2a90dc9ebbac444aa837828c" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
                   
                    <a href="https://pooltool.io/pool/6f60acc09987507409148f6985d20a8e2a90dc9ebbac444aa837828c/epochs" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
                  
                    <br />
      </header>
    </div>
  );
}

export default About;