import React from "react";
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
    const [state, handleSubmit] = useForm("mpzbznvg");
    if (state.succeeded) {
        return <p>Thanks for the interest!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Email address"
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
          placeholder="Type your message here!"
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



function Home() {
  return (
    <div className="home">
            <header className="App-header">
                <img src='/logo.svg' className="App-logo" alt="logo"/>
                <p>
                    <iframe title="info" src="https://stakada.io/embed/stats?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2&custom_metric_value=100%&custom_metric_caption=Awesomeness" width="100%" height="400" style={{"max-width":"750px"}} frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
                    <iframe style={{}} title="How-to iframe" credit="0" src="https://stakada.io/embed/howto?pool_id=aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" width="100%" height="680" frameborder="0" scrolling="no" credits="0"></iframe>
                    <br />
                    <iframe title="epoch counter" src="https://stakada.io/embed/epoch" frameborder="0" width="100%" height="60" style={{"max-width":"750px"}} credits="0"></iframe>
                    <br />
                    <iframe width="100%" src="https://www.youtube.com/embed/xX4lf11H5Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <iframe width="100%" src="https://www.youtube.com/embed/R_3JLGjUrME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <h4>Additional Pool Info:</h4>
                    <a href="https://cardanoscan.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2?tab=delegators" target="_blank" className="App-link" rel="noopener noreferrer">cardanoscan</a>
                    <br />
                    <a href="https://adatools.io/pools/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adatools</a>
                    <br />
                    <a href="https://pooltool.io/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2/delegators" target="_blank" className="App-link" rel="noopener noreferrer">pooltool</a>
                    <br />
                    <a href="https://adapools.org/pool/aa3f700fc539642a938fbcc8b0bb4a37c0fd6b5023fd412f89693aa2" target="_blank" className="App-link" rel="noopener noreferrer">adapools</a>
                    <br />
                    <h4>Contact Us:</h4>
                    <ContactForm />
                    <br />
                </p>
            </header>
    </div>
  );
}

export default Home;