import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";


function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbznvg");
  if (state.succeeded) {
      return <p>Thanks for the interest!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}


function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <iframe title="info" src="https://stakada.io/embed/stats?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2&custom_metric_value=100%&custom_metric_caption=Awesomeness" width="100%" height="400" style={{"max-width":"750px"}} frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
                    <iframe style={{}} title="How-to iframe" credit="0" src="https://stakada.io/embed/howto?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" width="100%" height="680" frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
                    <iframe title="epoch counter" src="https://stakada.io/embed/epoch" frameborder="0" width="100%" height="60" style={{"max-width":"750px"}} credits="0"></iframe>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xX4lf11H5Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/R_3JLGjUrME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <a href="https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
                    <br />
                    <a href="https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
                    <br />
                    <a href="https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
                    <br />
                    <a href="https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adapools</a>
                    <br />
                    <ContactForm />
                    <br />
                </p>
            </header>
        </div>
    );
}

export default App;
