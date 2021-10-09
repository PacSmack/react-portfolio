import React, { useState, useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css"


import aboutIcon from '../assets/NavBar/about.png';
import techIcon from '../assets/NavBar/tech.png';
import projectsIcon from '../assets/NavBar/projects.png';
import interestsIcon from '../assets/NavBar/interests.png';
import contactIcon from '../assets/NavBar/contact.png';
import scrollIcon from '../assets/NavBar/scroll.png';

import { Link } from 'react-scroll';


export default function NavBar() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])


    return (
        <nav data-aos="fade-right" className="navbar">

            <ul className="navbar-nav">

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={500}
                >
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={aboutIcon} />
                            <span className="link-text">About</span>
                        </a>
                    </li></Link>

                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={500}
                >
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={projectsIcon} />
                            <span className="link-text">Projects</span>
                        </a>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={500}
                >
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={techIcon} />
                            <span className="link-text">Tech</span>
                        </a>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="interests"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={500}
                >
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={interestsIcon} />
                            <span className="link-text">Interests</span>
                        </a>
                    </li>
                </Link>

                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={false}
                    offset={-70}
                    duration={500}
                >
                    <li className="nav-item">
                        <a href="#" className="nav-link" >
                            <img src={contactIcon} />
                            <span className="link-text">Contact</span>
                        </a>
                    </li>
                </Link>

                <li className="nav-item">
                    <a href="#" className="nav-link scroll-to-top" onClick={scrollToTop} >
                        <img src={scrollIcon} />
                    </a>
                </li>

            </ul>
        </nav>
    )
}