'use client';

import { createContext, useContext, useState } from 'react';
import { usePlausible } from 'next-plausible';

type FilterContextType = {
    companyFilter: string[];
    typeFilter: string[];
    techFilter: string[];
    filterCompany: (company: string) => void;
    removeCompanyFilter: (company: string) => void;
    filterType: (type: string) => void;
    removeTypeFilter: (type: string) => void;
    filterTech: (tech: string) => void;
    removeTechFilter: (tech: string) => void;
    filterProjects: (project: ProjectInfo) => boolean;
};

export const FilterContext = createContext<FilterContextType | undefined>(
    undefined,
);

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};

export default function FilterProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const plausible = usePlausible();
    const [companyFilter, setCompanyFilter] = useState<string[]>([]);
    const [typeFilter, setTypeFilter] = useState<string[]>([]);
    const [techFilter, setTechFilter] = useState<string[]>([]);

    const analyze = (prop: string) =>
        plausible('Filter', {
            props: {
                prop,
            },
        });

    const filterCompany = (company: string) => {
        if (companyFilter.includes(company)) return;
        setCompanyFilter([...companyFilter, company]);
        analyze(company);
    };

    const removeCompanyFilter = (company: string) => {
        setCompanyFilter(companyFilter.filter((c) => c !== company));
    };

    const filterType = (type: string) => {
        if (typeFilter.includes(type)) return;
        setTypeFilter([...typeFilter, type]);
        analyze(type);
    };

    const removeTypeFilter = (type: string) => {
        setTypeFilter(typeFilter.filter((c) => c !== type));
    };

    const filterTech = (tech: string) => {
        if (techFilter.includes(tech)) return;
        setTechFilter([...techFilter, tech]);
        analyze(tech);
    };

    const removeTechFilter = (tag: string) => {
        setTechFilter(techFilter.filter((t) => t !== tag));
    };

    const filterProjects = (project: ProjectInfo) => {
        // filter by company
        if (companyFilter.length > 0 && !companyFilter.includes(project.company))
            return false;
        // filter by type
        if (typeFilter.length > 0 && !typeFilter.includes(project.type))
            return false;
        // filter by tag
        if (
            techFilter.length > 0 &&
            !techFilter.every((tech) => project.tech.includes(tech))
        ) {
            return false;
        }

        return true;
    };

    return (
        <FilterContext.Provider
            value={{
                companyFilter,
                typeFilter,
                techFilter,
                filterCompany,
                removeCompanyFilter,
                filterType,
                removeTypeFilter,
                filterTech,
                removeTechFilter,
                filterProjects,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}
