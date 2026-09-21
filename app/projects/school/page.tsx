import { getProjects } from '@/lib/projects-db'


export default async function SchoolProject () {
    const projects = await getProjects('school');

     return(
        <main>
            <h1 className="text-4xl font-bold mb-12">School Projects</h1>
        </main>
     );   
}