import Image from 'next/image';
import { Code, LayoutTemplate } from 'lucide-react';
import { MouseEvent } from 'react';

import TechLinks from '@/components/modules/tech-links';
import Link from 'next/link';
import { useFilter } from '@/base/providers/filter-provider';
import clsx from 'clsx';

type ProjectListCardProps = ProjectInfo & {
    modal?: boolean;
};
export default function ProjectListCard(props: ProjectListCardProps) {
    const { filterCompany, filterTech } = useFilter();

    function handleFilterCompany(e: MouseEvent) {
        e.stopPropagation();
        if (!filterCompany) return;
        filterCompany(props.company);
    }

    function handleFilterTech(e: MouseEvent, tech: string) {
        e.stopPropagation();
        if (!filterTech) return;
        filterTech(tech);
    }
    return (
        <article
            className={clsx([
                'mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row',
                { 'items-center sm:flex-col': props.modal },
            ])}
        >
            <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-lg sm:w-[420px] xl:w-[620px]">
                <Image src={props.image} alt="Featured project" fill />
                <div className="absolute inset-0 z-10 h-full w-full bg-primary opacity-60" />
            </div>
            <div className="bg-paper flex w-full flex-col gap-4 rounded-lg p-6 drop-shadow-lg sm:w-[300px] lg:w-[400px] xl:w-[500px]">
                <div className="flex justify-between">
                    <div>
                        <h3 className="flex-grow">{props.name}</h3>
                        <small
                            className="cursor-pointer capitalize text-primary-foreground"
                            onClick={handleFilterCompany}
                        >
                            {props.company}
                        </small>
                    </div>

                    <div className="flex gap-4 align-middle">
                        {props.links.demo && (
                            <Link
                                href={props.links.demo}
                                className="h-fit rounded-sm bg-primary-foreground p-0.5"
                            >
                                <LayoutTemplate className="cursor-pointer text-2xl text-primary sm:text-4xl" />
                            </Link>
                        )}
                        {props.links.github && (
                            <Link
                                href={props.links.github}
                                className="h-fit rounded-sm bg-primary-foreground p-0.5"
                            >
                                <Code className="cursor-pointer text-2xl text-primary sm:text-4xl" />
                            </Link>
                        )}
                    </div>
                </div>
                <p className="flex-grow">{props.description}</p>
                <ul className="flex flex-wrap gap-1">
                    {props.tech.map((tech) => (
                        <li
                            key={`${props.name}-${tech}`}
                            className="small-copy cursor-pointer p-0.5 px-1 hover:bg-primary"
                            onClick={(e) => handleFilterTech(e, tech)}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                <TechLinks links={props.links} />
            </div>
        </article>
    );
}
