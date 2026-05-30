export type Project = {
    year: string;
    month: string;
    title: string;
    description: string;
    technologies: string[];
    href: string;
    image?: string;
    status: string;
    category: string;
};

export const projects: Project[] = [
    {
        year: '2021',
        month: 'JUN',
        title: 'Simple Calculator',
        description: 'A clean, intuitive and simple JavaScript calculator with modern UI design',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        href: 'https://enegalan.github.io/simplecalculator/',
        image: '/portfolio/images/projects/simplecalculator.png',
        status: 'Completed',
        category: 'Web App'
    },
    {
        year: '2021',
        month: 'MAY',
        title: 'TechMobile',
        description: 'E-commerce platform for smartphones with advanced filtering and cart functionality',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
        href: 'https://github.com/enegalan/TechMobileProject',
        image: '/portfolio/images/projects/techmobile.png',
        status: 'Completed',
        category: 'E-commerce'
    },
    {
        year: '2023',
        month: 'APR',
        title: 'EyeNET',
        description: 'Database builder service with intuitive GUI and advanced query capabilities',
        technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
        href: 'https://github.com/enegalan/EyeNET',
        image: '',
        status: 'Completed',
        category: 'Desktop App'
    },
    {
        year: '2024',
        month: 'FEB',
        title: 'PrintHub',
        description: '3D printing service platform with STL file processing and 3D printing management',
        technologies: ['React', 'Laravel', 'Inertia.js', 'Vite', 'Tailwind CSS', 'Three.js'],
        href: 'https://github.com/enegalan/printhub',
        image: '/portfolio/images/projects/printhub.png',
        status: 'Completed',
        category: 'E-commerce'
    },
    {
        year: '2024',
        month: 'MAR',
        title: 'miDiverse',
        description: 'Social media platform for sharing and discovering piano music, connecting with other musicians and sharing sheet music. UI inspired by Twitter/X',
        technologies: ['React', 'Laravel', 'Inertia.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'MySQL'],
        href: 'https://github.com/enegalan/midiverse',
        image: '/portfolio/images/projects/midiverse.png',
        status: 'Archived',
        category: 'Social Media'
    },
    {
        year: '2025',
        month: 'JUL',
        title: 'HackEx',
        description: 'HackEx is a web game where you have to scan other devices, hack them, and steal their bank money. You can also upgrade your stats and device to hack more efficiently',
        technologies: ['Laravel', 'Vite', 'JavaScript', 'MySQL'],
        href: 'https://github.com/enegalan/hackex',
        image: '/portfolio/images/projects/hackex.png',
        status: 'Completed',
        category: 'Web Game'
    },
    {
        year: '2025',
        month: 'SEP',
        title: 'cmdset',
        description: 'CmdSet is a CLI tool written in C that lets you turn your frequently used shell commands into reusable presets. Support with Python.',
        technologies: ['C', 'Makefile', 'Python'],
        href: 'https://github.com/enegalan/cmdset',
        status: 'Completed',
        category: 'Library'
    },
    {
        year: '2025',
        month: 'OCT',
        title: 'keycode',
        description: 'Keycode is a competitive typing web application designed specifically for developers to improve their coding speed and accuracy across different programming languages.',
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Socket.io', 'Express', 'Node.js', 'MongoDB', 'JWT'],
        href: 'https://github.com/enegalan/keycode',
        image: '/portfolio/images/projects/keycode.png',
        status: 'Completed',
        category: 'Web App'
    },
    {
        year: '2025',
        month: 'OCT',
        title: 'keyboard-tester',
        description: 'Simple Keyboard Tester written in SvelteKit.',
        technologies: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        href: 'https://github.com/enegalan/keyboard-tester',
        image: '/portfolio/images/projects/keyboard-tester.png',
        status: 'Completed',
        category: 'Web App'
    },
    {
        year: '2025',
        month: 'OCT',
        title: 'logget',
        description: 'A command-line tool to extract browser logs and network data from web pages using an embedded Chromium browser.',
        technologies: ['Go', 'Shell', 'Makefile'],
        href: 'https://github.com/enegalan/logget',
        status: 'Completed',
        category: 'Library'
    },
    {
        year: '2025',
        month: 'NOV',
        title: 'codevo',
        description: 'CodEvo is an extension for VSCode that visualizes the evolution of any file over time.',
        technologies: ['VSCode', 'JavaScript', 'TypeScript', 'D3.js', 'CSS'],
        href: 'https://github.com/enegalan/codevo',
        image: '/portfolio/images/projects/codevo.png',
        status: 'Completed',
        category: 'Extension'
    },
    {
        year: '2025',
        month: 'NOV',
        title: 'request-manager',
        description: 'A JavaScript library that helps you organize and control HTTP requests efficiently.',
        technologies: ['JavaScript'],
        href: 'https://github.com/enegalan/request-manager',
        status: 'Completed',
        category: 'Library'
    },
    {
        year: '2026',
        month: 'JAN',
        title: 'time-to-go',
        description: 'A Visual Studio Code extension that shows the remaining time until your set end time in the status bar.',
        technologies: ['TypeScript', 'VSCode'],
        href: 'https://github.com/enegalan/time-to-go',
        image: '/portfolio/images/projects/time-to-go.png',
        status: 'Completed',
        category: 'Extension'
    },
    {
        year: '2026',
        month: 'FEB',
        title: 'contextmenu.js',
        description: 'A smooth and highly customizable JavaScript context-menu library.',
        technologies: ['TypeScript', 'CSS'],
        href: 'https://github.com/enegalan/contextmenu.js',
        image: '/portfolio/images/projects/contextmenu.js.png',
        status: 'Completed',
        category: 'Library'
    },
    {
        year: '2026',
        month: 'FEB',
        title: 'cleantimeline',
        description: 'A Visual Studio Code extension that provides granular control over Local History. Delete full timeline entries or individual snapshots for the active file safely and efficiently.',
        technologies: ['TypeScript', 'VSCode'],
        href: 'https://github.com/enegalan/cleantimeline',
        status: 'Completed',
        category: 'Extension'
    },
    {
        year: '2026',
        month: 'FEB',
        title: 'toth',
        description: 'A modern platform for discovering and downloading EPUB books.',
        technologies: ['TypeScript', 'CSS', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'NestJS', 'Docker', 'Redis', 'Meilisearch'],
        href: 'https://github.com/enegalan/toth',
        image: '/portfolio/images/projects/toth.png',
        status: 'Completed',
        category: 'Web App'
    },
    {
        year: '2026',
        month: 'MAR',
        title: 'lightpickr',
        description: 'A lightweight, fully customizable & headless JavaScript datepicker.',
        technologies: ['JavaScript', 'CSS'],
        href: 'https://github.com/enegalan/lightpickr',
        image: '/portfolio/images/projects/lightpickr.png',
        status: 'Completed',
        category: 'Library'
    },
    {
        year: '2026',
        month: 'MAR',
        title: 'horizonhub',
        description: 'A centralized dashboard for monitoring Laravel Horizon jobs across multiple services.',
        technologies: ['Laravel', 'Node.js', 'MySQL', 'Docker', 'Redis', 'Vite', 'Tailwind CSS', 'JavaScript', 'Turbo (hotwired)', 'Alpine.js'],
        href: 'https://github.com/enegalan/horizonhub',
        image: '/portfolio/images/projects/horizonhub.png',
        status: 'Completed',
        category: 'Web App'
    },
    {
        year: '2026',
        month: 'APR',
        title: 'cli-tamagotchi',
        description: 'A terminal Tamagotchi.',
        technologies: ['Python'],
        href: 'https://github.com/enegalan/cli-tamagotchi',
        status: 'Early Dev',
        category: 'CLI'
    }
];
