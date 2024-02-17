import React from 'react';

export default function HoverText({ string = "", style = {} }) {
    return (
            string.split("").map((letter, index) => {
                if (letter === ' ') {
                    return (
                        <label style={style} className='letter' key={index}>&nbsp;</label>
                    );
                } else {
                    return (
                        <label style={style} className='letter' key={index}>{letter}</label>
                    );
                }
            })
    );
}
