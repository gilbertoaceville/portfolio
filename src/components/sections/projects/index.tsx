import Section from '@/components/modules/section';
import ProjectCard from './project-card';

export default function Projects({ projects }: { projects: ProjectInfo[] }) {
    return (
        <Section id="projects">
            <div className="flex flex-col sm:gap-[124px]">
                {(projects || []).map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
}
