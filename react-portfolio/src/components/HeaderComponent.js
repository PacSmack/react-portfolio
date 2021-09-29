import React from 'react';

import myPhoto from '../assets/myPhoto.png'
import githubIcon from '../assets/gitHubIcon.png'
import emailIcon from '../assets/emailIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'

export default function Header() {

    return (
        <section className="black">
            <div className="photoWrap">
                <img src={myPhoto} alt="" />
            </div>
            <div className="iconsWrapper">
                <a href="https://www.linkedin.com/in/nathan-dias-silva/" target="_blank"><img src={linkedinIcon} alt="" /></a>
                <a href="https://github.com/PacSmack" target="_blank"><img src={githubIcon} alt="" /></a>
                <a href="mailto: nathandsbr@gmail.com" target="_blank"><img src={emailIcon} alt="" /></a>
            </div>

            <h1>Hello, my name is Nathan da Silva.<br />
                I am a Full-Stack Web Developer living in Mesa, AZ.
            </h1>

        </section>
    )
}