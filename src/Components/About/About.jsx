import "./About.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="About">
      <div className="about-sep">
      <span className="aboutTitle">
        ABOUT ME
      </span>
      </div>
      <div className="about-container">
      <span className="aboutDesc">
        I am a Passionate Web Developer with experience in building responsive
        websites. Eager to bring a fresh perspective, enthusiasm, and dedication
        to a dynamic team. Excited about leveraging skills and passion to make a meaningful impact.
      </span>
      <h2 className="edu-title">My Education</h2>
      <div className="eduBars">
        <div className="eduBar">
          <div className="eduBarText" >
            <h2 className="heading-edu">B.E. COMPUTER SCIENCE AND ENGINEERING (2019-2023)</h2>
            <p>
              Adhiyamaan College of Engineering (Autonomous) - Anna University,
              Hosur.
              <br /> CGPA - 7.96
            </p>
          </div>
        </div>
        <div className="eduBar">
          <div className="eduBarText">
            <h2 className="heading-edu">CLASS XII (2018-2019)</h2>
            <p>
              Sri Vijay Vidyalaya Mat. Hr. Sec. School, Hosur.
              <br />
              Percentage - 66.66%
            </p>
          </div>
        </div>
        <div className="eduBar">
          <div className="eduBarText">
            <h2 className="heading-edu">CLASS X (2016-2017)</h2>
            <p>
              Sri Vijay Vidyalaya Mat. Hr. Sec. School, Hosur.
              <br />
              Percentage - 96.2%
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
