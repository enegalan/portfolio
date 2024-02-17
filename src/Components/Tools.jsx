import React, { useEffect } from 'react';
import AOS from 'aos';

// Importar los componentes de iconos directamente
import RedisIcon from './icons/RedisIcon';
import MysqlIcon from './icons/MysqlIcon';
import MariadbIcon from './icons/MariadbIcon';
import Html5Icon from './icons/Html5Icon';
import Css3Icon from './icons/Css3Icon';
import ReactIcon from './icons/ReactIcon';
import BootstrapIcon from './icons/BootstrapIcon';
import TailwindIcon from './icons/TailwindIcon';
import JavaIcon from './icons/JavaIcon';
import JavascriptIcon from './icons/JavascriptIcon';
import JqueryIcon from './icons/JqueryIcon';
import PhpIcon from './icons/PhpIcon';
import LaravelIcon from './icons/LaravelIcon';
import NodejsIcon from './icons/NodejsIcon';
import Python3Icon from './icons/Python3Icon';
import ExtjsIcon from './icons/ExtjsIcon';
import RabbitmqIcon from './icons/RabbitmqIcon';
import ComposerIcon from './icons/ComposerIcon';
import NpmIcon from './icons/NpmIcon';
import DockerIcon from './icons/DockerIcon';
import KubernetesIcon from './icons/KubernetesIcon';
import LxcLxdIcon from './icons/LxcLxdIcon';
import AwsIcon from './icons/AwsIcon';
import ApacheIcon from './icons/ApacheIcon';
import NginxIcon from './icons/NginxIcon';
import GitIcon from './icons/GitIcon';
import MarkdownIcon from './icons/MarkdownIcon';
import GrafanaIcon from './icons/GrafanaIcon';
import VscodeIcon from './icons/VscodeIcon';
import TrelloIcon from './icons/TrelloIcon';
import GithubIcon from './icons/GithubIcon';
import GitlabIcon from './icons/GitlabIcon';

const Tools = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    const defaultStyle = {
        width: '80px',
        height: '60px',
    }
    
    const composer_style = {
        width: '80px',
        height: '80px',
    }

    const python_style = {
        width: '78px',
        height: '76px',
    }
    
    const tools = [
        { name: 'Redis', icon: <RedisIcon style={defaultStyle} /> },
        { name: 'MySQL', icon: <MysqlIcon style={defaultStyle} /> },
        { name: 'MariaDB', icon: <MariadbIcon style={defaultStyle} /> },
        { name: 'HTML5', icon: <Html5Icon style={defaultStyle} /> },
        { name: 'CSS3', icon: <Css3Icon style={defaultStyle} /> },
        { name: 'React', icon: <ReactIcon style={defaultStyle} /> },
        { name: 'Bootstrap', icon: <BootstrapIcon style={defaultStyle} /> },
        { name: 'Tailwind', icon: <TailwindIcon style={defaultStyle} /> },
        { name: 'Java', icon: <JavaIcon style={defaultStyle} /> },
        { name: 'JavaScript', icon: <JavascriptIcon style={defaultStyle} /> },
        { name: 'jQuery', icon: <JqueryIcon style={defaultStyle} /> },
        { name: 'PHP', icon: <PhpIcon style={defaultStyle} /> },
        { name: 'Laravel', icon: <LaravelIcon style={defaultStyle} /> },
        { name: 'Node.js', icon: <NodejsIcon style={defaultStyle} /> },
        { name: 'Python3', icon: <Python3Icon style={python_style} /> },
        { name: 'ExtJS', icon: <ExtjsIcon style={defaultStyle} /> },
        { name: 'RabbitMQ', icon: <RabbitmqIcon style={defaultStyle} /> },
        { name: 'Composer', icon: <ComposerIcon style={composer_style} /> },
        { name: 'npm', icon: <NpmIcon style={defaultStyle} /> },
        { name: 'Docker', icon: <DockerIcon style={defaultStyle} /> },
        { name: 'Kubernetes', icon: <KubernetesIcon style={defaultStyle} /> },
        { name: 'LXC/LXD', icon: <LxcLxdIcon style={defaultStyle} /> },
        { name: 'AWS', icon: <AwsIcon style={defaultStyle} /> },
        { name: 'Apache', icon: <ApacheIcon style={defaultStyle} /> },
        { name: 'Nginx', icon: <NginxIcon style={defaultStyle} /> },
        { name: 'GIT', icon: <GitIcon style={defaultStyle} /> },
        { name: 'Markdown', icon: <MarkdownIcon style={defaultStyle} /> },
        { name: 'Grafana', icon: <GrafanaIcon style={defaultStyle} /> },
        { name: 'VSCode', icon: <VscodeIcon style={defaultStyle} /> },
        { name: 'Trello', icon: <TrelloIcon style={defaultStyle} /> },
        { name: 'GitHub', icon: <GithubIcon style={defaultStyle} /> },
        { name: 'GitLab', icon: <GitlabIcon style={defaultStyle} /> },
    ];

    return (
        <div id="tools-list">
            {tools.map((tool, index) => (
                <div data-aos="fade-up" key={index}>
                    {tool.icon}
                    <span>{tool.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Tools;
