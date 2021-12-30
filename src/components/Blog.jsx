import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";


function Blog() {
  return (
    <div className="Blog">
          <Particles options={particlesOptions}/>
            <header className="App-header">
                <p>
                    <h4>Wallets for Everyone</h4>
                    <iframe width="80%" height="60%" src="https://www.youtube.com/embed/xX4lf11H5Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <h4>Your wallet to the exchange and back! </h4>
                    <iframe width="80%" src="https://www.youtube.com/embed/R_3JLGjUrME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                </p>
            </header>
    </div>
  );
}

export default Blog;