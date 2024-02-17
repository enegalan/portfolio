import React from 'react';

const NpmIcon = ({ style = {} }) => {
    return (
        <svg style={style} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect width="24" height="24" opacity="0" />
                <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
            </g>
        </svg>
    );
};

export default NpmIcon;
