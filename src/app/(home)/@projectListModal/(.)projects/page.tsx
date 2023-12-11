import { PROJECTS_DATA } from "@/base/config/constants";
import ProjectListDialog from "@/components/sections/project-list/project-list-dialog";

export default async function Page() {
    return <ProjectListDialog projects={PROJECTS_DATA} />;
}
