import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState, useRef, useEffect } from 'react';


const Navbar = () => {

  const [show, setShow] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
    }, []);

    const showNav = () => {
      setShow(true);
    };

    const hideNav = () => {
      setShow(false);
    };

    const handleLinkClick = () => {
      setShow(false);
    };

  return (
    <div>
        <nav className="navbar">
          <h5 title="HI">Portfolio</h5>
          <div className="menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={400} className="menuItem">Home</Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-34} duration={400} className="menuItem">About</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-34} duration={400} className="menuItem">Skills</Link>
                <Link activeClass="active" to="myWork" spy={true} smooth={true} offset={-30} duration={400} className="menuItem">My Work</Link>
          </div>
             <Link className="active1" to="contact" spy={false} smooth={true} offset={-34} duration={400}>Contact me</Link>
             <i class="fa-solid fa-bars" onClick={showNav}></i>
            {/* <button className="menuBtn" onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:"smooth"});
            }}>Contact Me</button> */}

            {/* side-navbar */}
                <div className="side-navbar" style={{ right: show ? '0' : '-100%' }}>
                  <div className="side-navbar-links">
                    <p><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={400} className="menuItem" onClick={handleLinkClick}>Home</Link></p>
                    <p><Link activeClass="active" to="About" spy={true} smooth={true} offset={-34} duration={400} className="menuItem" onClick={handleLinkClick}>About</Link></p>
                    <p><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-34} duration={400} className="menuItem" onClick={handleLinkClick}>Skills</Link></p>
                    <p><Link activeClass="active" to="myWork" spy={true} smooth={true} offset={-30} duration={400} className="menuItem" onClick={handleLinkClick}>My Work</Link></p><br/>
                    <p><Link className="active2" to="contact" spy={false} smooth={true} offset={-34} duration={400} onClick={handleLinkClick}>Contact me</Link></p>
                  </div>
                  <i class="fa-regular fa-x" onClick={hideNav}></i>
                </div>
        </nav>
    </div>
  )
}

export default Navbar