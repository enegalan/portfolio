import React from 'react';
import Button from '@mui/material/Button';

const ProjectList = () => {
    const projects = [
        {
            id: 1,
            title: 'Simple Calculator',
            description: 'A Javascript simple calculator using eval function.',
            url: 'https://www.ejemplo.com/proyecto1',
        },
        {
            id: 2,
            title: 'TechMobile Project',
            description: 'Mobilephones e-commerce shop project.',
            url: 'https://www.ejemplo.com/proyecto2',
        },
    ];

    return (
        <section>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectList;
