import { PROJECTS_DATA } from "@/base/config/constants";
import ProjectList from "@/components/sections/project-list";

export default async function Page() {
    return <ProjectList projects={PROJECTS_DATA} />;
}
