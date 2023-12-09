'use client';

import { HoverCardContent } from '@radix-ui/react-hover-card';
import Link from 'next/link';

import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import { GithubIcon, LinkedInIcon, EmailIcon } from './icons.const';

type AboutProps = Pick<About, "github" | "linkedin" | "email">
const aboutJSON: AboutProps = {
    linkedin: "https://www.linkedin.com/in/james-gilbert-b10149264/",
    github: "https://github.com/gilbertoaceville",
    email: "gilbertoaceville@gmail.com"
}

export default function IconLinks({ about = aboutJSON }: { about?: AboutProps }) {
    const linkedInUsername = about.linkedin.replace(/\/$/, '').split('/').pop();
    const githubUsername = about.github.replace(/\/$/, '').split('/').pop();

    const links = [
        {
            title: 'Github',
            copy: '@' + githubUsername,
            href: about.github,
            icon: <GithubIcon width={30} height={30} />,
        },
        {
            title: 'LinkedIn',
            copy: '@' + linkedInUsername,
            href: about.linkedin,
            icon: <LinkedInIcon width={30} height={30} />,
        },
        {
            title: 'Email',
            copy: about.email,
            href: 'mailto:' + about.email + '?subject=Hello!',
            icon: <EmailIcon width={30} height={30} />,
        },
    ];

    return (
        <div className="flex w-48 justify-between ">
            {links.map((link) => (
                <HoverCard key={link.title} openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                        <Link
                            title={link.title}
                            className="fill-neutral-600 transition-colors hover:fill-neutral-950 dark:fill-neutral-400 dark:hover:fill-neutral-50"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.icon}
                        </Link>
                    </HoverCardTrigger>
                    <HoverCardContent side="top" className="pb-4">
                        <div className="rounded border border-border p-2 text-sm">
                            {link.copy}
                        </div>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </div>
    );
}
