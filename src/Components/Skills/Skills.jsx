import './Skills.css';
import React from 'react'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section id="skills">
        <div className="skills-sep">
        <span className="skillTitle">SKILLS</span>
        <div className="skillBars">
            <div className="skillBar">
                <img className="html" src='html.png' alt='html'/>
                <p>HTML5</p>
            </div>
            <div className="skillBar">
                <img className="css" src='css.png' alt='css'/>
                <p>CSS3</p>
            </div>
            <div className="skillBar">
                <img className="javaScript" src='js.png' alt='js'/>
                <p>JavaScript</p>
            </div>
            <div className="skillBar">
                <img className="react" src='react.png' alt='reactJS'/>
                <p>ReactJS</p>
            </div>
            <div className="skillBar">
                <img className="python" src='python.png' alt='python'/>
                <p>Python</p>
            </div>
            <div className="skillBar">
                <img className="mysql" src='mysql.png' alt='mysql'/>
                <p>MySQL</p>
            </div>
            <div className="skillBar">
                <img className="mongodb" src="mongodb.png" alt='mongodb'/>
                <p>MongoDB</p>
            </div>
            <div className="skillBar" >
                 <img className="git" src="Git-Icon.png" alt='github'/>
                 <p>Git</p>
            </div>
            <div className="skillBar">
                 <img className="github" src="github.png" alt='github'/>
                 <p>Github</p>
            </div>
            <div className="skillBar">
                <img className="kubernetes" src="kubernetes.png" alt='kubernetes'/>
                <p>kubernetes</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills