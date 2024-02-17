import React, { useEffect } from 'react';

import DeveloperSVG from "./DeveloperSVG";
import AOS from 'aos';

export default function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    return (
        <header>
            <img id="side-dots" src="images/side-dots.png" alt="Side dots" data-aos="fade-right" />
            <div data-aos="fade-up">
                <h1>
                    <span>Hey! I'm Eneko Galan</span>
                    <p>DevOps <b>{"<"}Web Developer{" />"}</b></p>
                </h1>
                <p>Hello! I am a dedicated individual with a passion for new technologies. My experience covers several areas of the technology sector, meeting all the needs of an application throughout its life cycle, from development to deployment.</p>
            </div>
            <div data-aos="fade-left">
                <DeveloperSVG />
            </div>
        </header>
    );
}