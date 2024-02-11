import React from 'react';
import Timeline from './Timeline';

const ProjectList = () => {
    const projects = [{
        '2021': [{
            'JUN': {
                'title': 'Simple calculator',
                'body': 'A simple Javascript styled calculator',
                'href': 'https://enegalan.github.io/simplecalculator/',
                'image': '/images/projects/simplecalculator.png'
            },
            'MAY': {
                'title': 'TechMobile',
                'body': 'Smartphone eCommerce for smartphones',
                'href': 'https://github.com/enegalan/TechMobileProject',
                'image': '/images/projects/techmobile.png'
            }
        }],
        '2022': [{
            'OCT': {
                'title': 'NorthClassic',
                'body': 'Musical culture website design',
                'href': 'https://enegalan.github.io/musicproject/',
                'image': '/images/projects/northclassic.png'
            },
        }],
        '2023': [{
            'APR': {
                'title': 'EyeNET',
                'body': 'A database builder service provider made with Java Swing',
                'href': 'https://github.com/enegalan/EyeNET',
                'image': '',
            }
        }],
        '2024': [{
            'FEB': {
                'title': 'PrintHub',
                'body': '3D Printing service provider, including e-commerce and STL file uploader and scanner for buying your own pieces. Made with React, tailwindcss and Laravel + Inertia',
                'href': 'https://github.com/enegalan/printhub',
                'image': '/images/projects/printhub.png',
            }
        }]
    }];

    return (
        <section>
            <Timeline elements={projects} />
        </section>
    );
};

export default ProjectList;
