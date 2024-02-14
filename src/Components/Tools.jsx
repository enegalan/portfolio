import React, { useEffect } from 'react';
import AOS from 'aos';

const Tools = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    const tools = [
        { name: 'Redis', icon: "/images/tools/redis.svg" },
        { name: 'MySQL', icon: '/images/tools/mysql.svg' },
        { name: 'MariaDB', icon: '/images/tools/mariadb.svg' },
        { name: 'MongoDB', icon: '/images/tools/mongodb.svg' },
        { name: 'HTML5', icon: '/images/tools/html5.svg' },
        { name: 'CSS3', icon: '/images/tools/css3.svg' },
        { name: 'React', icon: '/images/tools/react.svg' },
        { name: 'Bootstrap', icon: '/images/tools/bootstrap.svg' },
        { name: 'Tailwind', icon: '/images/tools/tailwind.svg' },
        { name: 'Java', icon: '/images/tools/java.svg' },
        { name: 'JavaScript', icon: '/images/tools/javascript.svg' },
        { name: 'jQuery', icon: '/images/tools/jquery.svg' },
        { name: 'PHP', icon: '/images/tools/php.svg' },
        { name: 'Laravel', icon: '/images/tools/laravel.svg' },
        { name: 'Node.js', icon: '/images/tools/nodejs.svg' },
        { name: 'Python3', icon: '/images/tools/python.svg', style: { height: '78px'} },
        { name: 'ExtJS', icon: '/images/tools/extjs.svg' },
        { name: 'RabbitMQ', icon: '/images/tools/rabbitmq.svg' },
        { name: 'Composer', icon: '/images/tools/composer.svg' },
        { name: 'npm', icon: '/images/tools/npm.svg' },
        { name: 'Docker', icon: '/images/tools/docker.svg' },
        { name: 'Kubernetes', icon: '/images/tools/kubernetes.svg' },
        { name: 'LXC/LXD', icon: '/images/tools/lxc-lxd.svg' },
        { name: 'AWS', icon: '/images/tools/aws.svg' },
        { name: 'Apache', icon: '/images/tools/apache.svg' },
        { name: 'Nginx', icon: '/images/tools/nginx.svg' },
        { name: 'GIT', icon: '/images/tools/git.svg' },
        { name: 'Markdown', icon: '/images/tools/markdown.svg' },
        { name: 'Grafana', icon: '/images/tools/grafana.svg' },
        { name: 'VSCode', icon: '/images/tools/vscode.svg' },
        { name: 'Trello', icon: '/images/tools/trello.svg' },
        { name: 'GitHub', icon: '/images/tools/github.svg' },
        { name: 'GitLab', icon: '/images/tools/gitlab.svg' },
    ];

    return (
        <div id="tools-list">
            {tools.map((tool, index) => (
                <div data-aos="fade-up" key={index}>
                    <img src={tool.icon} alt={tool.name} style={tool.style} />
                    <span>{tool.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Tools;
