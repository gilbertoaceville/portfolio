import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';

import '@/base/styles/globals.css';
import { Providers } from '@/base/providers/providers';
import ThemeToggle from '@/components/modules/theme/theme-toggle';

const metaTitle = 'Gilbert James | Front-End Engineer';
const metaDescription = `Gilbert James is a seasoned Front-End Engineer with a strong focus on Front-End development, consistently incorporating the latest technological trends to uphold and optimize applications`;

const metaOgImages = [
    {
        url: `${process.env.NEXT_PUBLIC_URL}og.jpg`,
        width: 1200,
        height: 630,
        alt: metaTitle,
    },
];

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
    title: metaTitle,
    description: metaDescription,
    keywords: [
        'Gilbert James',
        'James',
        'Gilbert',
        'Software Engineer',
        'Software',
        'Engineer',
        'Front End',
        'Front-End',
        'Front End Engineer',
        'Senior Front End Engineer',
        'Front-End Engineer',
        'Senior Front-End Engineer',
    ],
    openGraph: {
        type: 'website',
        locale: 'en',
        url: process.env.NEXT_PUBLIC_URL,
        title: metaTitle,
        description: metaDescription,
        images: metaOgImages,
    },
    twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: metaOgImages,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            suppressHydrationWarning={true}
            lang="en"
            className="background-background select-none scroll-smooth text-base text-foreground selection:bg-neutral-300 selection:text-neutral-900 dark:selection:bg-neutral-400 dark:selection:text-neutral-900 sm:select-auto"
        >
            <head>
                <PlausibleProvider
                    domain="james-gilbert.vercel.app"
                    trackOutboundLinks={true}
                    trackFileDownloads={true}
                    taggedEvents={true}
                />
            </head>
            <body className="relative mx-auto h-full w-full max-w-10xl">
                <Providers>
                    <div className="fixed bottom-8 right-8 z-50 sm:bottom-12">
                        <ThemeToggle />
                    </div>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
