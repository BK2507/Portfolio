import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Work.css"


const Work = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="myWork">
    <span className="workTitle">PROJECTS</span>
    <div className="workBars">
            <div className="workBar">
              <div className="img-work">
                <img src="QR-Code.png" alt="IMG" className="workBarImg" />
                <h3>QR CODE GENERATOR</h3>
              </div>
              <div className="work-content">
                <a href="https://qr-generator-bk.netlify.app/" target="_blank" rel="noreferrer"><img className="up-right-arrow" src="up-right-arrow.png" alt="->" /></a>
              </div>  
            </div>
    </div>
            
    </section>
  )
}

export default Work