'use client';

import Link from 'next/link';
import { usePlausible } from 'next-plausible';

import { NewTab } from '@/components/modules/social-icons/icons.const';

export default function DownloadResume() {
    const plausible = usePlausible();

    return (
        <Link
            href="/resume"
            target="_blank"
            onClick={() => plausible('Resume Download')}
            className="group inline-flex select-none justify-center gap-2 pt-8 text-lg hover:underline"
        >
            View Full Resume{' '}
            <span className="pt-0.5 transition-all duration-150 group-hover:sm:translate-x-1">
                <NewTab />
            </span>
        </Link>
    );
}
