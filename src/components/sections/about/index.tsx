import Markdown from "@/components/modules/markdown";
import Section from "@/components/modules/section";

export default function About({ about }: { about: About }) {
    return (
        <Section id="about">
            <div className="space-y-4 text-neutral-800 dark:text-neutral-300">
                <div className="space-y-4" dangerouslySetInnerHTML={{ __html: about?.description }} />
            </div>
        </Section>
    );
}
