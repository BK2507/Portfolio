import React from 'react';
import {useEffect} from "react";
import './Intro.css';
import Typewriter from "typewriter-effect"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  function typeWriter(){
    return(
      <div className="typewriter">
        <span className="introText">
          <Typewriter 
          options={{
                autoStart: true,
                loop: true,
                delay:100,
                strings:["Frontend Developer","Web Developer","Backend Developer"]
          }}/>
        </span>
      </div>
    )
  }
  
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                <span className="hello">I'm </span>Barath Kumar<br/><span className="introRole">{typeWriter()}</span>
            </span>
          <div> 
            <a href='BARATH KUMAR S.pdf' className="btn" src="BARATH KUMAR S.pdf" target='_blank' rel='noreferrer'download>Download Resume</a>
          </div>
          <div className='img-container'>
            <img src="BK new.png" className='bg' alt=""/>
          </div>  
        </div>
    </section>
  )
}

export default Intro