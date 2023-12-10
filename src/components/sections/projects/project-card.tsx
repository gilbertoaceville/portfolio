import clsx from 'clsx';
import Image from 'next/image';
import TechLinks from '@/components/modules/tech-links';

type ProjectCardProps = ProjectInfo & {
    index: number;
};

export default function ProjectCard(props: ProjectCardProps) {
    const isOdd = props.index % 2 !== 0;
    return (
        <article
            className={clsx([
                'relative flex flex-col items-center xl:flex-row xl:items-end',
                { 'xl:flex-row-reverse': isOdd },
            ])}
        >
            <div className="xl:max-w-fit xl:flex-grow">
                <div className="flex flex-col justify-between gap-2 xl:flex-row xl:items-end">
                    <div>
                        <span className="small-copy font-mono">
                            {props.type}
                        </span>
                        <h3>{props.name}</h3>
                    </div>
                    <ul className="tech-list">
                        {props.tech.map((tech, index) => (
                            <li
                                className={clsx([
                                    'small-copy font-mono',
                                    { 'hidden sm:block': index > 3 },
                                ])}
                                key={`${props.name}-${tech}`}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative mt-4 w-[320px] sm:w-[420px] xl:w-[620px] overflow-hidden rounded-lg h-[350px]">
                    <Image
                        src={props.image}
                        alt="Featured project"
                        fill
                    />
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
                <TechLinks className="mt-4 justify-end" links={props.links} />
            </div>
        </article>
    );
}
