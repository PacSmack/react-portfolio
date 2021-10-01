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
                <img src={jsIcon} alt="JavaScript" />
                <img src={cssIcon} alt="CSS" />
                <img src={reactIcon} alt="React" />
                <img src={gitIcon} alt="Git" />
                <img src={herokuIcon} alt="Heroku" />
                <img src={mysqlIcon} alt="MySql" />
                <img src={mongoIcon} alt="MongoDB" />
                <img src={nodeIcon} alt="NodeJs" />
                <img src={bootstrapIcon} alt="Bootstrap" />
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