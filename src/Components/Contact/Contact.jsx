import { useRef } from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7li6509', 'template_emmoasp', form.current, {
        publicKey: 'betYmNpWFrVfsYXob',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("E-mail sent..!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
        <div className="con-sep">
          <span className="ContactTitle">GET IN TOUCH<br/><span className="ContactTitle-2">LET'S WORK TOGETHER !</span></span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder="Your Name" name="your_name" required/>
              <input type="email" className="email" placeholder="Your Email" name="your_email" required/>
              <textarea className="msg" rows="5"placeholder="Your Message" name="message" required></textarea>
              <button className="submitBtn" type="submit" value="send">Send Message</button>
              <div className="links">
              <a href="https://www.linkedin.com/in/barathkumars25/" rel="noreferrer" target="_blank"><img className="linkedIn" src="linkedin.png" alt="linkedIn" /></a>
              <a className="envelope" href="mailto:barath2571@gmail.com" rel="noreferrer" target="_blank"><img className="gmail" src="gmail.png" alt="gmail" /></a>
              <a href="https://github.com/BK2507" rel="noreferrer" target="_blank"><img className="github-img" src="github-img.png" alt="github" />
              </a>
        </div>
          </form>
        </div>
    </section>
  )
}

export default Contact