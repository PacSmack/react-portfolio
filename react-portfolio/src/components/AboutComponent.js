import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section className="about" id="about">

            <h1 data-aos="fade-up" data-aos-once="false" className="title">About Me</h1>
            <p data-aos="fade-up" data-aos-once="false">Self-driven professional with 5 years of experience working in a team environment. Targeting to utilize
                obtained skills in the software development field as a full stack web developer. Proactive and motivated for
                any given challenge as a Brazilian student, seeking opportunities for intellectual and career growth.</p>


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