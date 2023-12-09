import SectionView from '@/components/section-view';
import IconLinks from '@/components/social-icons';
import TagList from '@/components/tag-list';

export default async function Page() {
    return (
        <>
            <nav className="inset-0 flex flex-col justify-between gap-4 overflow-hidden pb-12 md:sticky md:h-screen md:pt-16 lg:left-32">
                <div className="flex flex-col gap-12 transition-all lg:gap-32">
                    <div>
                        <div className="text-4xl" aria-label="Name">
                            Gilbert James
                        </div>
                        <div
                            className="pb-1 text-2xl text-neutral-600 dark:text-neutral-500"
                            aria-label="Title"
                        >
                            Front-End Engineer
                        </div>
                        <TagList tags={["Javascript", "Typescript", "React", "React Native", "CMS", "Node"]} />
                    </div>
                    <SectionView />
                </div>
                <div className="flex items-center justify-between">
                    <IconLinks />
                </div>
            </nav>
            <div className="ml-auto flex h-full w-full flex-col gap-12 md:z-10 md:w-2/3 md:gap-24 lg:w-1/2">
                <h1>About</h1>
                <h1>Project</h1>
                <h1>Experiences</h1>
                <h1>Contact</h1>
            </div>
        </>
    );
}
