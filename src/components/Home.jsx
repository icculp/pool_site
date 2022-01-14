import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";



function Home() {
  return (
    <div className="App">
          <Particles options={particlesOptions}/>
            <header className="App-header">
                <img src='/CNDL-220114-One_Color-Blue.svg' className="App-logo" alt="logo"/>
                <p>
                  <br />
                    <iframe style={{}} title="How-to iframe" credit="0" src="https://stakada.io/embed/howto?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" width="100%" height="680" frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
                    <iframe title="epoch counter" src="https://stakada.io/embed/epoch" frameborder="0" width="100%" height="60" style={{"max-width":"750px"}} credits="0"></iframe>
                    <br />

                </p>
            </header>
    </div>
  );
}

export default Home;