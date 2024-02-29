import React from 'react';
import World from './World';

import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Contact = () => {
    return (
        <div>
            <div id="contact">
                <World />
                <div id='contact-info'>
                    <p>Hello! If you'd like to get in touch with me or check out my repositories on GitHub, you can do so in the following ways:</p>
                    <ul>
                        <li id="mail">
                            <a href="mailto:enekogalanelorza@gmail.com">enekogalanelorza@gmail.com</a>
                        </li>
                        <li>
                            <a href="https://github.com/enegalan" target="_blank" rel="noopener noreferrer" title="Visit my GitHub profile"><GithubIcon /></a>
                            <a href="https://www.linkedin.com/in/eneko-galan/" target="_blank" rel="noopener noreferrer" title="Visit my Linkedin profile"><LinkedinIcon style={{ height: '3rem' }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
