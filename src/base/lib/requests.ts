export async function getPageViews(): Promise<number> {
    const url = new URL('https://plausible.io/api/v1/stats/aggregate');
    url.searchParams.set('site_id', 'james-gilbert.vercel.app');
    url.searchParams.set('period', '7d');

    const res: {
        results: {
            visitors: {
                value: number;
            };
        };
    } = await fetch(url, {
        headers: {
            Authorization: 'Bearer ' + process.env.PLAUSIBLE_API_KEY,
        },
        next: { revalidate: 10 },
    }).then((res) => res.json());

    return res.results.visitors.value || 0;
}
