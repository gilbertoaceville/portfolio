export const PROJECTS_DATA: ProjectInfo[] = [
    {
        name: 'Code Editor',
        label: 'Website Platform',
        type: 'website',
        company: 'personal',
        description:
            'A resizable code editor switching language extension, having padding, theme and background selectors',
        tech: ['Next.js', 'TailwindCSS', 'SCSS'],
        image: '/personal/code-editor.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/code-to-image',
            demo: 'https://code-t-image.vercel.app/',
        },
    },
    {
        name: 'Task Manager',
        label: 'Website Platform',
        type: 'website',
        company: 'personal',
        description:
            'A simple task manager incorporating clerk-auth as authentication manager',
        tech: ['Next.js', 'Styled Components', 'Clerk'],
        image: '/personal/t-manager.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/c-task-manager',
            demo: 'https://c-task-manager.vercel.app/',
        },
    },
    {
        name: 'Dodonut',
        label: 'Website platform',
        type: 'website',
        company: 'featured',
        description:
            'The website build is focused on climate sustainability reducing website carbon emission by >80% on each page visit.',
        tech: ['Astro', 'Svelte', 'TailwindCSS', 'NodeJS'],
        image: '/featured/dodonut.webp',
        links: {
            github: '',
            demo: 'https://dodonut.com/',
        },
    },
    {
        name: 'Portfolio',
        label: 'Website Platform',
        company: 'personal',
        type: 'website',
        description:
            'Introducing my personal website! Expect updates on my experiences, upcoming projects, and tech articles.',
        tech: ['Typescript', 'NextJS', 'TailwindCSS'],
        image: '/personal/portfolio.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/portfolio',
            demo: 'https://james-gilbert.vercel.app/',
        },
    },
    {
        name: 'Moebel24',
        label: 'E-commerce',
        type: 'eCommerce',
        company: 'featured',
        description:
            'An e-commerce platform focused on home appliances, moebel incorporates one of the most complex filtration playing with many filter categories.',
        tech: ['Typescript', 'NextJS', 'SCSS', 'Elastic Search', 'Vercel'],
        image: '/featured/moebel.webp',
        links: {
            github: '',
            demo: 'https://www.moebel24.de/',
        },
    },
    {
        name: 'Deeptrekker',
        label: 'Marketing and E-commerce',
        company: 'featured',
        type: 'eCommerce',
        description:
            'Deeptrekker combines both worlds as a marketing and e-commerce website for ROVs, with a little tradeoff in performance, the website deals with large media resources.',
        tech: ['Typescript', 'NextJS', 'GraphQL', 'Netlify', 'Contentful'],
        image: '/featured/deeptrekker.webp',
        links: {
            github: '',
            demo: 'https://www.deeptrekker.com/',
        },
    },
    {
        name: 'Live Search App',
        label: 'Website Platform',
        company: 'personal',
        type: 'website',
        description:
            'A simple live search application integrated with upsplash api.',
        tech: ['React', 'Netlify'],
        image: '/personal/bluecube-live-search.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/bluecube-live-search-app',
            demo: 'https://bluecube-live-search.netlify.app/',
        },
    },
    {
        name: 'Sample Store',
        label: 'E-commerce',
        company: 'personal',
        type: 'eCommerce',
        description: 'A mini e-commerce with cart mechanism built with Gatsby.',
        tech: ['Redux', 'Gatsby', 'Vercel', 'Typescript'],
        image: '/personal/sample-commerce.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/gatsby-ecommerce-with-redux',
            demo: 'https://gatsby-ecommerce-with-redux.vercel.app/',
        },
    },
    {
        name: 'Geo Coffee Store',
        label: 'Website Platform',
        company: 'personal',
        type: 'website',
        description:
            'A simple personal coffee shop project with live geolocation services.',
        tech: ['Javascript', 'NextJS', 'Vercel', 'NodeJS'],
        image: '/personal/coffee-store.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/geolocation-coffee-store-with-next',
            demo: 'https://geolocation-coffee-stores.vercel.app/',
        },
    },
];

export const EXPERIENCE_DATA: ExperienceInfo[] = [
    {
        title: 'IFMA',
        content: {
            position: 'Frontend Engineer',
            period: 'October 2020 - Present',
            items: [
                'Analyzed and implemented optimization cutting edge technologies on existing code base increasing page load by <3 secs.',
                'Set performance metrics and developed functionalities for the second version of the streaming web app while assessing the designs for technical feasibility gaining investors trust with monetary commitment of $100K+',
                'Slashed CI/CD deploy times on AWS infrastructure by 75% and optimized development workflow through code reviews thereby expediting the delivery of features and improvements.',
            ],
        },
    },
    {
        title: 'Bejamas',
        content: {
            position: 'Frontend Developer',
            period: 'February 2022 - December 2023',
            items: [
                'Researched and developed climate sustainable web projects such as the Dodonut project, reducing website carbon emissions by >80% on each page visit and attracting potential investors in line with the company’s long-term visions',
                'Developed and maintained services via Headless CMS following Agile/SCRUM/Kanban methodologies increasing customer retention by 80%',
                `Planned and executed high-performance website applications within the team, directly contributed to the company's revenue`,
                ' Optimized web performance on finalized projects by over 55%, leveraging tools like WebPageTest, and Statsy for precise analysis and actionable insights reducing user bounce rate.',
            ],
        },
    },
    {
        title: 'LearnFactory Ng',
        content: {
            position: 'Frontend Engineer',
            period: 'March 2021 - October 2021',
            items: [
                `Boosted customer requests for mobile/web applications by 20% by actively contributing to team efforts in meeting consumer goals.`,
                'Enhanced mobile traffic by 11% through the implementation of a standardized, responsive, and mobile-first approach across all outputs.',
            ],
        },
    },
    {
        title: 'Vicmie Inc.',
        content: {
            position: 'Web Developer',
            period: 'March 2019 - October 2020',
            items: [
                'Built dynamic enterprise websites using the MERN stack, leading to increase in user engagement and growth in customer ',
                'Optimized business operations with timely task completion, reducing downtime by 15% through effective bug analysis.',
            ],
        },
    },
];
