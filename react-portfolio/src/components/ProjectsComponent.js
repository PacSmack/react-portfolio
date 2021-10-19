import React, { useState, useEffect } from 'react';

import githubIcon from '../assets/gitHubIcon.png';
import externalLink from '../assets/externalLink.png';

import artinerary from '../assets/Projects/Artinerary/ArtInerary.gif';
import duoLOL from '../assets/Projects/cupid/cupid.gif';
import using from '../assets/Projects/uSing/using.gif';


import Aos from 'aos';
import "aos/dist/aos.css"


export default function About() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <section id="projects">
            <h1 data-aos="flip-up" data-aos-once="true" className="title">Projects</h1>

            <div data-aos="flip-up" data-aos-once="true" className="projects" className="projectImgWrapper">
                <div className="wrapProjectGif">
                    <div className="image-container">
                        <img className="projectImg" src={duoLOL} alt="" />
                        <div className="image-caption">
                            <a href="https://github.com/PacSmack/duoLOL" target="_blank"><img src={githubIcon} alt="" /></a>
                        </div>
                        <div className="bottomBtn">
                            <a href="https://duolol.herokuapp.com/" target="_blank"><img className="imgExt" src={externalLink} alt="" /></a>
                        </div>
                    </div>

                    <div className="image-container">
                        <img className="projectImg" src={artinerary} alt="" />
                        <div className="image-caption">
                            <a href="https://github.com/PacSmack/ArtInerary" target="_blank"><img src={githubIcon} alt="" /></a>
                        </div>

                        <div className="bottomBtn">
                            <a href="https://hidden-reaches-45405.herokuapp.com/" target="_blank"><img className="imgExt" src={externalLink} alt="" /></a>
                        </div>
                    </div>

                    <div className="image-container">
                        <img className="projectImg" src={using} alt="" />
                        <div className="image-caption">
                            <a href="https://github.com/PacSmack/uSing" target="_blank"><img src={githubIcon} alt="" /></a>
                        </div>
                        <div className="bottomBtn">
                            <a href="https://jbryant4.github.io/uSing/" target="_blank"><img className="imgExt" src={externalLink} alt="" /></a>
                        </div>
                    </div>
                </div>



            </div>

            <div class="custom-shape-divider-top-1632964461">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1632964777">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
                </svg>
            </div>

        </section>


    )
}