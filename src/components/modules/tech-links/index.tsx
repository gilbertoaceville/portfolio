import clsx from 'clsx';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

type ListIconLinkProps = {
    href: string;
    icon: React.ReactElement;
    label: string;
};

function ListIconLink(props: ListIconLinkProps) {
    return (
        <li>
            <Link
                className="text-2xl"
                href={props.href}
                target="_blank"
                aria-label={props.label}
            >
                {props.icon}
            </Link>
        </li>
    );
}

type IconLinksProps = {
    links: { github: string; demo: string };
    display?: boolean;
    className?: string;
};

export default function TechLinks(props: IconLinksProps) {
    if (!props.display) return null;

    return (
        <ul className={clsx(['flex items-center gap-4', props.className])}>
            {props.links.github && (
                <ListIconLink
                    href={props.links.github}
                    icon={<Github />}
                    label="GitHub Link"
                />
            )}
            {props.links.demo && (
                <ListIconLink
                    href={props.links.demo}
                    icon={<ExternalLink />}
                    label="Demo Link"
                />
            )}
        </ul>
    );
}
