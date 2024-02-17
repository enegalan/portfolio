import React from 'react';
import World from './World';

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
                            <a href="https://github.com/enegalan" target="_blank" rel="noopener noreferrer"><img src="/images/tools/github.svg" alt="GitHub icon" /></a>
                            <a href="https://www.linkedin.com/in/eneko-galan/" target="_blank" rel="noopener noreferrer"><img style={{ width: '2.7rem' }} src="/images/tools/linkedin.svg" alt="Linkedin icon" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
