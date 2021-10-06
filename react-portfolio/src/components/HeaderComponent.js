import React from 'react';

import myPhoto from '../assets/myPhoto.png'
import githubIcon from '../assets/gitHubIconP.png'
import emailIcon from '../assets/emailIconP.png'
import linkedinIcon from '../assets/linkedinIconP.png'

export default function Header() {

    return (
        <section className="header">
            <div className="photoWrap">
                <img src={myPhoto} alt="" />
            </div>
            <div className="iconsWrapper">
                <a href="https://www.linkedin.com/in/nathan-dias-silva/" target="_blank"><img src={linkedinIcon} alt="" /></a>
                <a href="https://github.com/PacSmack" target="_blank"><img src={githubIcon} alt="" /></a>
                <a href="mailto: nathandsbr@gmail.com" target="_blank"><img src={emailIcon} alt="" /></a>
            </div>


            <div class="typing-container">
                <span id="sentence" class="sentence"></span>
                <span class="input-cursor"></span>
            </div>


            {/* <h1 id="typing">Hello, my name is Nathan da Silva.<br />
                I am a <span>Full-Stack Web Developer</span> living in Mesa, AZ.<div id="crow">|</div>
            </h1> */}

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