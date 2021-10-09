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
            <p data-aos="fade-up" data-aos-once="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Laoreet sit amet cursus sit amet dictum sit. Vitae tortor condimentum lacinia quis vel eros. Massa enim nec dui nunc mattis enim. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Commodo quis imperdiet massa tincidunt nunc. Pellentesque elit eget gravida cum sociis natoque penatibus. Condimentum id venenatis a condimentum vitae sapien. Malesuada proin libero nunc consequat interdum varius sit. Adipiscing bibendum est ultricies integer quis auctor elit. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Purus semper eget duis at.</p>


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