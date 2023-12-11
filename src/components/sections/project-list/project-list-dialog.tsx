'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import ProjectList from '.';

export default function ProjectListDialog({
    projects,
}: {
    projects: ProjectInfo[];
}) {
    const router = useRouter();
    return (
        <Dialog onOpenChange={router.back} defaultOpen={true}>
            <DialogContent forceMount={true} size="xl">
                <ProjectList projects={projects} modal={true} />
            </DialogContent>
        </Dialog>
    );
}
