'use client';

import { Fragment, useMemo, useState } from 'react';

import { useFilter } from '@/base/providers/filter-provider';
import BackButton from '@/components/ui/button/components/back-button';
import FilterPopover from '@/components/modules/filter-popover';
import Filters from '@/components/modules/filters';
import { Switch } from '@/components/ui/switch';
import ProjectListCard from './project-list-card';
import ProjectCard from '../projects/project-card';

export default function ProjectList({
    projects,
    modal,
    isList,
}: {
    projects: ProjectInfo[];
    modal?: boolean;
    isList?: boolean;
}) {
    const { filterCompany, filterTech, filterProjects } = useFilter();
    const [toggle, setToggle] = useState(isList);

    const sortedProjects = useMemo(
        () =>
            projects
                .sort((a, b) => {
                    // sort by company
                    if (a.company > b.company) return 1;
                    if (a.company < b.company) return -1;
                    // sort by title
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
                .filter(filterProjects),
        [projects, filterProjects],
    );

    const renderProjectItem = (project: ProjectInfo, index: number) => {
        return toggle ? (
            <ProjectListCard {...project} modal={modal} />
        ) : (
            <ProjectCard
                index={index}
                {...project}
                modal
                handleCompanyClick={filterCompany}
                handleTechClick={filterTech}
            />
        );
    };

    return (
        <Fragment>
            <div>
                <div className="grid w-full grid-cols-12 pb-4 pt-4 text-center md:pb-2">
                    <div className="col-span-4 flex items-center">
                        {!modal && <BackButton />}
                        {modal && (
                            <Switch
                                checked={toggle}
                                onCheckedChange={() => setToggle((prev) => !prev)}
                                id="edit-mode"
                                title="Switch Layout"
                            />
                        )}
                    </div>
                    <h2 className="col-span-4 select-none text-2xl">
                        Projects
                    </h2>
                    <div className="col-span-4 flex justify-end">
                        <FilterPopover projects={projects} />
                    </div>
                </div>
                <Filters />
            </div>
            <div className="flex flex-col items-center gap-10 pb-8 pt-4">
                {sortedProjects.map((project, index) =>
                    renderProjectItem(project, index),
                )}
            </div>
        </Fragment>
    );
}
