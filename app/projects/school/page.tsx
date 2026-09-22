import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';
import { Suspense } from 'react';


function SchoolProjectListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg p-4 animate-pulse">
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-4" />
        </div>
      ))}
    </div>
  )
}

export default async function SchoolProject () {
    const projects = await getProjects('school');

     return(
        <main>
            <section className="py-12">
                <h1 className="text-4xl font-bold mb-12">School Projects</h1>
                <Suspense fallback={<SchoolProjectListSkeleton />}>
                    <ProjectList projects={projects} />
                </Suspense>
            </section>
           
        </main>
     );   
}