export const dynamic = 'force-dynamic';
import {getProjects} from '@/lib/projects-db'
import ProjectList from '@/components/ProjectList';

export default async function OpenSourceProject() {
    const projects = await getProjects('opensource')
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-12">Open Source Projects</h1>
            <ProjectList projects={projects} />
        </main>
    );
}