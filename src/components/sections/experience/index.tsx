'use client';

import { usePlausible } from 'next-plausible';
import { useState } from 'react';

import DownloadResume from '@/components/modules/resume';
import Section from '@/components/modules/section';
import TabContent from '@/components/modules/tab-content';
import Tabs from '@/components/modules/tabs';

export default function Experience({ experiences }: { experiences: ExperienceInfo[] }) {
    const plausible = usePlausible();
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Section id="history">
            <div onClick={()=> plausible("Experiences clicked" + selectedTab)} className="flex min-h-[520px] flex-col gap-8 sm:min-h-[400px] sm:flex-row">
                <Tabs
                    tabs={experiences.map((tab) => tab.title)}
                    selectedTab={selectedTab}
                    onChange={setSelectedTab}
                />
                {experiences.map((tab, index) => (
                    <TabContent
                        key={tab.title}
                        company={tab.title}
                        period={tab.content.period}
                        position={tab.content.position}
                        items={tab.content.items}
                        hidden={index !== selectedTab}
                    />
                ))}
            </div>
            <DownloadResume />
        </Section>
    );
}
