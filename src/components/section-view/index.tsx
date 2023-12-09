'use client';

import { useNavigation } from '@/base/providers/navigation-provider';
import { Button } from '@/components/ui/button';

const sections: Section[] = ['about', 'projects', 'history', 'contact'];

export default function SectionView() {
    const { currentSection } = useNavigation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hidden select-none flex-col gap-1.5 pb-24 text-secondary-foreground transition-all md:flex md:items-start md:justify-start">
            {sections.map((section, i) => {
                const size =
                    currentSection === section ? 'navLinkActive' : 'navLinkInactive';
                const variant =
                    currentSection === section ? 'navActive' : 'navInactive';

                const content = section.charAt(0).toUpperCase() + section.slice(1)
                return (
                    <Button
                        size={size}
                        key={section}
                        variant={variant}
                        onClick={() => scrollToSection(section)}
                    >
                        {content}
                    </Button>
                );
            })}
        </div>
    );
}
