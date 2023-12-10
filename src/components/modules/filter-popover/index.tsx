import { useFilter } from '@/base/providers/filter-provider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { Funnel } from '@/components/modules/social-icons/icons.const';

export default function FilterPopover({
    projects,
}: {
    projects: ProjectInfo[];
}) {
    const {
        companyFilter,
        techFilter,
        typeFilter,
        filterType,
        removeTypeFilter,
        filterCompany,
        removeCompanyFilter,
        filterTech,
        removeTechFilter,
    } = useFilter();

    const companyOptions: string[] = [];
    const typeOptions: string[] = [];
    const techOptions: string[] = [];

    projects.forEach((project) => {
        if (!companyOptions.includes(project.company)) {
            companyOptions.push(project.company);
            companyOptions.sort();
        }
        if (!typeOptions.includes(project.type)) {
            typeOptions.push(project.type);
            techOptions.sort();
        }
        project.tech.forEach((tech) => {
            if (!techOptions.includes(tech)) {
                techOptions.push(tech);
                techOptions.sort();
            }
        });
    });

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    <Funnel />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-background">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 pb-2">
                        Company
                        <div className="flex max-h-28 flex-col gap-1 overflow-y-scroll rounded border border-border p-1">
                            {companyOptions.map((option) => (
                                <div className="flex gap-2" key={option}>
                                    <Checkbox
                                        id={'company-filter-' + option}
                                        checked={companyFilter.includes(option)}
                                        onCheckedChange={() => {
                                            if (
                                                companyFilter.includes(option)
                                            ) {
                                                removeCompanyFilter(option);
                                            } else {
                                                filterCompany(option);
                                            }
                                        }}
                                    />
                                    <Label className="capitalize" htmlFor={'company-filter-' + option}>
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pb-2">
                        Type
                        <div className="flex max-h-28 flex-col gap-1 overflow-y-scroll rounded border border-border p-1">
                            {typeOptions.map((option) => (
                                <div className="flex gap-2" key={option}>
                                    <Checkbox
                                        id={'company-filter-' + option}
                                        checked={typeFilter.includes(option)}
                                        onCheckedChange={() => {
                                            if (typeFilter.includes(option)) {
                                                removeTypeFilter(option);
                                            } else {
                                                filterType(option);
                                            }
                                        }}
                                    />
                                    <Label className="capitalize" htmlFor={'company-filter-' + option}>
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex grid-cols-3 flex-col gap-2 pb-2">
                        Tags
                        <div className="flex max-h-44 flex-col gap-1 overflow-y-scroll rounded border border-border p-1">
                            {techOptions.map((option) => (
                                <div className="flex gap-2" key={option}>
                                    <Checkbox
                                        id={'tag-filter-' + option}
                                        checked={techFilter.includes(option)}
                                        onCheckedChange={() => {
                                            if (techFilter.includes(option)) {
                                                removeTechFilter(option);
                                            } else {
                                                filterTech(option);
                                            }
                                        }}
                                    />
                                    <Label className="capitalize" htmlFor={'tag-filter-' + option}>
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
