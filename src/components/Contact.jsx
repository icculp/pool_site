import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

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



function Contact() {
  return (
    <div className="Contact">
          <Particles options={particlesOptions}/>
            <header className="App-header">
                <p>
                    <h4>Contact Us:</h4>
                    <ContactForm />
                    <br />
                </p>
            </header>
    </div>
  );
}

export default Contact;