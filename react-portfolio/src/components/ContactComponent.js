import emailIcon from '../assets/emailIcon.png';

import linkedinIcon from '../assets/linkedinIcon.png';
import resumeIcon from '../assets/resume.png';

import resumePdf from '../assets/Resume.pdf';

export default function Contact() {


    return (
        <section className="contact" id="contact">
            <h1 className="title">Let's Connect!</h1>

            <div className="contactWrapper">
                <a href="mailto: nathandsbr@gmail.com" target="_blank">
                    <div className="contactItem">
                        <div className="centered-div">
                            <div>
                                <h2>Email me!</h2>
                                <img src={emailIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </a>
                

                <a href={resumePdf} target="_blank">
                    <div className="contactItem">
                        <div className="centered-div">
                            <div>
                                <h2>Check out my resume!</h2>
                                <img src={resumeIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/nathan-dias-silva/" target="_blank">
                    <div className="contactItem">
                        <div className="centered-div">
                            <div>
                                <h2>Get in touch on Linkedin!</h2>
                                <img src={linkedinIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
<div className="last-phrase">
            <h1>“Judge of a man by his questions rather than by his answers.”</h1>
            <h2>-Voltaire</h2>
</div>


            <div class="custom-shape-divider-top-1632964461">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1632964970">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <rect x="1200" height="3.6"></rect>
                    <rect height="3.6"></rect>
                    <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </section >
    )
}