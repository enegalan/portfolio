import React, { useEffect } from 'react';

import AOS from 'aos';
import HoverText from './HoverText';
import DevPC from './icons/DevPC';

export default function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <header>
            <img rel='preload' id="side-dots" src="images/side-dots.png" alt="Side dots" data-aos="fade-right" />
            <div data-aos="fade-up">
                <h1>
                    <span>Hey! I'm Eneko Galan</span>
                    <p><HoverText string='DevOps' /> <b>{"<"}<HoverText string='Web Developer' />{" />"}</b></p>
                </h1>
                <p>Hello! I am a dedicated individual with a passion for new technologies. My experience covers several areas of the technology sector, meeting all the needs of an application throughout its lifecycle, from development to deployment.</p>
            </div>
            <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }} data-aos="fade-left">
                <DevPC />
            </div>
        </header>
    );
}