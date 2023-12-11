'use client';

import { ThemeProvider } from 'next-themes';
import { NavigationProvider } from './navigation-provider';
import FilterProvider from './filter-provider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <NavigationProvider>
                <FilterProvider>{children}</FilterProvider>
            </NavigationProvider>
        </ThemeProvider>
    );
}
