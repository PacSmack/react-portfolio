import React from 'react'

import html5Icon from '../assets/TechIcons/html5.png';
import jsIcon from '../assets/TechIcons/js.png';
import cssIcon from '../assets/TechIcons/css.png';
import reactIcon from '../assets/TechIcons/react.png';
import gitIcon from '../assets/TechIcons/git.png';
import herokuIcon from '../assets/TechIcons/heroku.png';
import mysqlIcon from '../assets/TechIcons/mysql.png';
import mongoIcon from '../assets/TechIcons/mongodb.png';
import nodeIcon from '../assets/TechIcons/nodejs.png';
import bootstrapIcon from '../assets/TechIcons/bootstrap.png';


export default function Technologies() {

    return (
        <section className="technologies">
            <h1>Technologies</h1>
            <container className="gallery">
                <img src={html5Icon} alt="HTML5" />
                <img src={jsIcon} alt="HTML5" />
                <img src={cssIcon} alt="HTML5" />
                <img src={reactIcon} alt="HTML5" />
                <img src={gitIcon} alt="HTML5" />
                <img src={herokuIcon} alt="HTML5" />
                <img src={mysqlIcon} alt="HTML5" />
                <img src={mongoIcon} alt="HTML5" />
                <img src={nodeIcon} alt="HTML5" />
                <img src={bootstrapIcon} alt="HTML5" />
            </container>

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