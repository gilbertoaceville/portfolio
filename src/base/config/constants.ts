export const PROJECTS_DATA: ProjectInfo[] = [
    {
      name: 'Wholesale E-commerce',
      label: 'Website platform',
      type: "eCommerce",
      company: "featured",
      description:
        'After spend a few weeks learning from a manufacturing business inside their warehouse I proposed and co-created a wholesale e-commerce platforms.',
      tech: ['React', 'MaterialUI', 'NodeJS', 'Firebase', 'GCP'],
      image: '/featured/wholesale.webp',
      links: {
        github: '',
        demo: '',
      },
    },
    {
      name: 'Portfolio',
      label: 'Website',
      type: "website",
      company: "personal",
      description:
        'This is the first iteration of my personal website. Here I will post about my experience, future projects and articles about tech.',
      tech: ['React', 'TailwindCSS', 'NextJS', 'CMS', 'AWS'],
      image: '/featured/portfolio.webp',
      links: {
        github: 'https://github.com/gilbertoaceville/portfolio',
        demo: '/',
      },
    },
    {
      name: 'PetPlant',
      label: 'IoT System + Mobile App',
      company: "featured",
      type: "marketing",
      description:
        'An IoT project  that transforms the Tamagotchi concept into a real experience. You can add your personal plant to the app and check its water level, sun light level and customize its appearance.',
      tech: ['Arduino', 'Angular', 'Ionic', 'NodeJS', 'Firebase'],
      image: '/featured/petplant.webp',
      links: {
        github: '',
        demo: '',
      },
    },
  ];

  export const EXPERIENCE_DATA: ExperienceInfo[] = [
    {
      title: 'Sitemate',
      content: {
        position: 'Fullstack Engineer',
        period: 'June 2023 - Present',
        items: [
          'Responsible for the development of third party API integrations.',
          'Deliver high quality production code to arrange the company’s needs.',
          'Collaborate with product managers and designers to create seamless no-code experiences for company’s users.',
        ],
      },
    },
    {
      title: 'Pearlii',
      content: {
        position: 'Software Developer',
        period: 'March 2021 - March 2023',
        items: [
          'Refactored 65% of the mobile app source code to implement code quality standards and normalize processes.',
          'Reduced mobile app load speed by 28% using state management strategies and reactive programming.',
          'Implemented a new website with the latest technology and reach a top performance score of 95+ measured by Lighthouse.',
          'Engineered a server-less back-end that provides an API and background processes (cronjobs, queue, notifications) to multiple apps to be consumed on demand.',
        ],
      },
    },
    {
      title: 'UGG Australia',
      content: {
        position: 'Full Stack Developer',
        period: 'January 2020 - February 2021',
        items: [
          `Research and analyze the company's core business to transform its operational processes into a web app that covers its needs.`,
          'Engineered a wholesale e-commerce platform that reduced the operational cost of the company by 23%.',
          'Integrated third-party providers into the company platform to standardize processes such as orders, shipping and accounting.',
        ],
      },
    },
    {
      title: 'AppLivio',
      content: {
        position: 'Fullstack Developer',
        period: 'March 2020 - November 2020',
        items: [
          'Developed a web app to communicate patients and doctors through a booked video call.',
          'Implemented a serverless back-end using AWS services such as Chime SDK, DynamoDB and Amplify.',
          'Architected the web app using React and Redux to manage the state of the app.',
        ],
      },
    },
    {
      title: 'Rebus',
      content: {
        position: 'Fullstack Developer',
        period: 'June 2017 - September 2019',
        items: [
          'Develop, upgrade and maintain multi-tenant software for multiple clients in different industries.',
          'Engineered a solution that automatically creates an agenda for users to meet with their customers, the algorithm prioritizes customers based on location and sales potential.',
          'Lead a team of 4 developers and managed to deliver, communicate and maintain reliable software.',
        ],
      },
    },
    {
      title: 'ParkeApp',
      content: {
        position: 'CTO & Co-Founder',
        period: 'November 2016 — May 2019',
        items: [
          'Engineered a minimal viable product',
          'Get our first 100 clients',
          'Start an acceleration and consolidation process with the main government funding entity in Colombia.',
        ],
      },
    },
  ];