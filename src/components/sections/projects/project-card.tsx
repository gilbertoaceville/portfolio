'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { usePlausible } from 'next-plausible';

import TechLinks from '@/components/modules/tech-links';

type ProjectCardProps = ProjectInfo & {
    index: number;
    handleCompanyClick?: (company: string) => void;
    handleTechClick?: (tech: string) => void;
    modal?: boolean;
};

export default function ProjectCard(props: ProjectCardProps) {
    const plausible = usePlausible();

    const viewProject = () => {
        if (!props.name) return null;

        return plausible('View Project', {
            props: {
                project: props.name,
            },
        });
    };

    const { handleCompanyClick, handleTechClick } = props;
    const isOdd = props.index % 2 !== 0;
    const content = props.modal ? props.company : props.label;

    function handleFilterCompany(e: MouseEvent) {
        e.stopPropagation();
        if (!handleCompanyClick) return;
        handleCompanyClick(props.company);
    }

    function handleFilterTech(e: MouseEvent, tech: string) {
        e.stopPropagation();
        if (!handleTechClick) return;
        handleTechClick(tech);
    }

    return (
        <article
            className={clsx([
                'relative flex flex-col items-center xl:flex-row xl:items-end',
                { 'xl:flex-row-reverse': isOdd },
            ])}
            onClick={viewProject}
        >
            <div className="xl:max-w-fit xl:flex-grow">
                <div className="flex flex-col justify-between gap-2 xl:flex-row xl:items-end">
                    <div>
                        <span
                            className={clsx([
                                'small-copy capitalize',
                                {
                                    'cursor-pointer text-primary-foreground':
                                        props.modal,
                                },
                            ])}
                            onClick={handleFilterCompany}
                        >
                            {content}
                        </span>
                        <h3>{props.name}</h3>
                    </div>
                    <ul
                        className={clsx([
                            'tech-list',
                            { 'gap-0 pr-0': props.modal },
                        ])}
                    >
                        {props.tech.map((tech, index) => (
                            <li
                                className={clsx([
                                    'small-copy',
                                    { 'hidden sm:block': index > 3 },
                                    {
                                        'small-copy cursor-pointer px-4 py-2 hover:bg-primary':
                                            props.modal,
                                    },
                                ])}
                                key={`${props.name}-${tech}`}
                                onClick={(e) => handleFilterTech(e, tech)}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative mt-4 h-[350px] w-[320px] overflow-hidden rounded-lg sm:w-[420px] xl:w-[620px]">
                    <Image src={props.image} alt="Featured project" fill />
                    <div className="absolute inset-0 z-10 h-full w-full bg-primary opacity-60" />
                </div>
            </div>
            <div
                className={clsx([
                    'bg-paper z-10 mx-8 mb-4 translate-y-[-60px] rounded-lg p-4 xl:absolute',
                    'sm:mx-auto sm:w-[320px] xl:w-[420px]',
                    'w-fit xl:mx-0 xl:translate-y-0',
                    isOdd
                        ? 'xl:translate-x-[120px]'
                        : 'xl:translate-x-[-120px]',
                ])}
            >
                <p className="small-copy">{props.description}</p>
                <TechLinks
                    className="mt-4 justify-end"
                    links={props.links}
                    display
                />
            </div>
        </article>
    );
}
