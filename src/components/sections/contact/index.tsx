'use client';

import { usePlausible } from 'next-plausible';

import Section from '@/components/modules/section';
import LinkButton from '@/components/ui/button/components/link-button';

export default function Contact({
    contact,
    pageViews,
}: {
    contact: Contact;
    pageViews: number;
}) {
    const plausible = usePlausible();
    return (
        <Section id="contact">
            <div className="flex w-full select-none flex-col gap-2 pb-20">
                <p className="text-lg">{contact.title}</p>
                <div className="max-w-[580px] text-justify">
                    <p>{contact.description}</p>
                    <div onClick={() => plausible('Contact Button Hit')}>
                        <LinkButton
                            href="mailto:gilbertoaceville0@gmail.com"
                            target="_blank"
                            className="mx-auto mt-8"
                        >
                            {contact.buttonText}
                        </LinkButton>
                    </div>
                </div>
            </div>

            <div
                aria-label="Page Views"
                className="select-none text-center text-xs text-neutral-600 dark:text-neutral-500"
            >
                {pageViews} {pageViews === 1 ? 'visit' : 'visits'} this week
            </div>
        </Section>
    );
}
