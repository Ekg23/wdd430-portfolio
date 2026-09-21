import {getProjects} from '@/lib/projects-db'

export default async function OpenSourceProject() {
    const projects = await getProjects('opensource')
    return (
        <main>
            <h1 className="text-4xl font-bold mb-12">Open Source Projects</h1>
        </main>
    );
}