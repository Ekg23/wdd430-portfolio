export const dynamic = 'force-dynamic';
import ProjectList from '@/components/ProjectList'
import { getProjects } from '@/lib/projects-db'


export default async function Home() {

  const projects = await getProjects()
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm a full-stack developer leraning Next.js and React Here are some of my recent projects.
        </p>
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}