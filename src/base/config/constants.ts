export const PROJECTS_DATA: ProjectInfo[] = [
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
        name: 'Beebole',
        label: 'Marketing Website',
        company: 'featured',
        type: 'marketing',
        description:
            'Marketing website for time management tool, beebole is developed with gatsby under the hood and PiwikPro for all analytics.',
        tech: ['Typescript', 'Gatsby', 'GraphQL', 'Netlify', 'Storyblok'],
        image: '/featured/beebole.webp',
        links: {
            github: '',
            demo: 'https://beebole.com/',
        },
    },
    {
        name: 'Deliverect',
        label: 'Marketing Website',
        company: 'featured',
        type: 'marketing',
        description:
            'Marketing website managing online ordering operations, featuring a complex calculator to calculate estimations and online orders by vendors.',
        tech: ['Javascript', 'Gatsby', 'GraphQL', 'Netlify', 'Contentful'],
        image: '/featured/deliverect.webp',
        links: {
            github: '',
            demo: 'https://www.deliverect.com/en',
        },
    },
    {
        name: 'Geo Coffee Store',
        label: 'Website Platform',
        company: 'personal',
        type: 'website',
        description: 'A simple personal coffee shop project with live geolocation services.',
        tech: ['Javascript', 'NextJS', 'Vercel', "NodeJS"],
        image: '/personal/coffee-store.webp',
        links: {
            github: 'https://github.com/gilbertoaceville/geolocation-coffee-store-with-next',
            demo: 'https://geolocation-coffee-stores.vercel.app/',
        },
    },
    {
      name: 'Live Search App',
      label: 'Website Platform',
      company: 'personal',
      type: 'website',
      description: 'A simple live search application integrated with upsplash api.',
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
];

export const EXPERIENCE_DATA: ExperienceInfo[] = [
    {
        title: 'Bejamas',
        content: {
            position: 'Frontend Developer',
            period: 'February 2022 - Present',
            items: [
                'Researched and developed climate sustainable web projects such as the Dodonut project, reducing website carbon emissions by >80% on each page visit and attracting potential investors in line with the company’s long-term visions.',
                'Worked with a team to develop and maintain services via Headless CMS including but not limited to Contentful, Storyblok, Dato, Sanity following Agile/SCRUM/Kanban methodologies.',
                'Successfully planned performant and fast website development with the tribe(team), directly contributed to the growth of the company’s revenue.',
                'Optimized web performance on finalized projects by over 55%, leveraging tools like WebPageTest, and Statsy for precise analysis and actionable insights. ',
            ],
        },
    },
    {
        title: 'IFMA',
        content: {
            position: 'Senior Frontend Developer',
            period: 'October 2020 - February 2022',
            items: [
                'Analyzed and implemented optimization cutting edge technologies on existing code base increasing page load by <3 secs.',
                'Worked with the design team to develop new designs and functionalities for the second version of the streaming web app while assessing the designs for technical feasibility gaining investors trust with extra monetary commitment of $30000.',
                'Effectively interacted with the Back-End Department regarding web application issues, working closely to develop innovative solutions notably the company’s streaming application.',
            ],
        },
    },
    {
        title: 'LearnFactory Ng',
        content: {
            position: 'Frontend Engineer',
            period: 'March 2021 - October 2021',
            items: [
                `Collaborated with teammates to meet consumer goals thereby increasing customer requests to develop mobile/web applications by 20%.`,
                'Standardized all output with a new, responsive , mobile-first approach and strategy which increased mobile traffic by 11%.',
            ],
        },
    },
    {
        title: 'Vicmie Inc.',
        content: {
            position: 'Web Developer',
            period: 'March 2019 - October 2020',
            items: [
                'Created entire enterprise website applications primarily using MERN stack. ',
                'Ensured uninterrupted flow of business-critical operations by finishing daily tasks on time. On-time error analysis reduced downtime by 15%. ',
            ],
        },
    },
];
