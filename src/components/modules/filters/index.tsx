'use client';

import { useFilter } from "@/base/providers/filter-provider";
import { Close } from "@/components/modules/social-icons/icons.const";
import { Badge } from "@/components/ui/badge";

export default function Filters() {
    const {
        companyFilter,
        typeFilter,
        techFilter,
        removeCompanyFilter,
        removeTechFilter,
        removeTypeFilter,
    } = useFilter();

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 pt-1">
                {companyFilter.map((company, i) => (
                    <FilterTag
                        key={'company-' + i}
                        tag={company}
                        onClick={() => removeCompanyFilter(company)}
                    />
                ))}
                {typeFilter.map((type, i) => (
                    <FilterTag
                        key={'type-' + i}
                        tag={type}
                        onClick={() => removeTypeFilter(type)}
                    />
                ))}
                {techFilter.map((tech, i) => (
                    <FilterTag
                        key={'tech-' + i}
                        tag={tech}
                        onClick={() => removeTechFilter(tech)}
                    />
                ))}
            </div>
        </div>
    );
}

function FilterTag({
    tag,
    onClick,
}: {
    tag: string;
    onClick: (tag: string) => void;
}) {
    return (
        <Badge onClick={() => onClick(tag)} variant="secondary">
            <Close /> {tag}
        </Badge>
    );
}
