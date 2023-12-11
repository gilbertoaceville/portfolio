import Link from 'next/link';

import Section from '@/components/modules/section';
import ProjectCard from './project-card';

export default function Projects({ projects }: { projects: ProjectInfo[] }) {
    return (
        <Section id="projects">
            <div className="flex flex-col sm:gap-[100px]">
                {(projects || []).slice(0, 3).map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
            <Link
                href="/projects"
                scroll={false}
                className="select-none pt-8 text-center text-lg hover:underline"
            >
                View All Projects
            </Link>
        </Section>
    );
}
