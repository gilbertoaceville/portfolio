'use client';

import Section from '@/components/modules/section';
import LinkButton from '@/components/ui/button/components/link-button';

export default function Contact({ contact }: { contact: Contact }) {
    return (
        <Section id="contact">
            <div className="flex w-full select-none flex-col gap-2 pb-20">
                <p className="text-lg">{contact.title}</p>
                <div className="max-w-[580px] text-justify">
                    <p>{contact.description}</p>
                    <LinkButton
                        href="mailto:gilbertoaceville0@gmail.com"
                        target="_blank"
                        className="mx-auto mt-8"
                    >
                        {contact.buttonText}
                    </LinkButton>
                </div>
            </div>
        </Section>
    );
}
