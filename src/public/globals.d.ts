type Section = 'about' | 'history' | 'projects' | 'contact';

type Contact = {
    title: string;
    description?: string;
    buttonText?: string;
};

type About = {
    id: number | string;
    title: string;
    description: string;
    name: string;
    tags: string[];
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
};

type ProjectInfo = {
    name: string;
    label: string;
    type?: 'marketing' | 'eCommerce' | 'website' | 'mobileApp';
    company?: 'personal' | 'featured';
    description: string;
    tech: string[];
    image: string;
    links: {
        github: string;
        demo: string;
    };
};

type ExperienceInfo = {
    title: string;
    content: {
        position: string;
        period: string;
        items: string[];
    };
};
