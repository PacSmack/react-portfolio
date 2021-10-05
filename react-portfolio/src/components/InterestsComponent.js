import React from 'react';

import questionMark from '../assets/questionMark.png'

export default function Interests() {

    return (
        <section className="interests" id="interests">
            <h1>Interests</h1>
            <container className="cardsContainer">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={questionMark} />
                        </div>
                        <div className="flip-card-back">
                            <h1>Spoken Languages</h1>
                            <p>English</p>
                            <p>Portuguese</p>
                            <p>Spanish</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={questionMark} />
                        </div>
                        <div className="flip-card-back">
                            <h1>Sports</h1>
                            <p>Volleyball</p>
                            <p>Soccer</p>                            
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={questionMark} />
                        </div>
                        <div className="flip-card-back">
                            <h1>Entertainment</h1>
                            <p>Anime</p>
                            <p>Music Concerts</p>
                        </div>
                    </div>
                </div>                
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