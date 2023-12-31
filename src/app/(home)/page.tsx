import SectionView from '@/components/modules/section-view';
import IconLinks from '@/components/modules/social-icons';
import TagList from '@/components/modules/tag-list';
import About from '@/components/sections/about';
import aboutJSON from "@/base/config/about.json";
import contactJSON from "@/base/config/contact.json";
import Projects from '@/components/sections/projects';
import { EXPERIENCE_DATA, PROJECTS_DATA } from '@/base/config/constants';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import { getPageViews } from '@/base/lib/requests';

export default async function Page() {
    const pageViews = await getPageViews();

    return (
        <>
            <nav className="inset-0 flex flex-col justify-between gap-4 overflow-hidden pb-12 md:sticky md:h-screen md:pt-16 lg:left-32">
                <div className="flex flex-col gap-12 transition-all lg:gap-32">
                    <div>
                        <div className="text-4xl" aria-label="Name">
                            {aboutJSON.name}
                        </div>
                        <div
                            className="pb-1 text-2xl text-neutral-600 dark:text-neutral-500"
                            aria-label="Title"
                        >
                            {aboutJSON.title}
                        </div>
                        <TagList tags={aboutJSON.tags} className='lg:w-[400px]' />
                    </div>
                    <SectionView />
                </div>
                <div className="flex items-center justify-between">
                    <IconLinks />
                </div>
            </nav>
            <div className="ml-auto flex h-full w-full flex-col gap-12 md:z-10 md:w-2/3 md:gap-24 lg:w-1/2">
                <About about={aboutJSON} />
                <Projects projects={PROJECTS_DATA} />
                <Experience experiences={EXPERIENCE_DATA}/>
                <Contact contact={contactJSON} pageViews={pageViews}/>
            </div>
        </>
    );
}
