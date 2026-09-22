import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import ProjectList from '@/components/ProjectList';
export const dynamic = 'force-dynamic';

export default async function ProjectsOverview({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = '', page } = await searchParams;
  const currentPage = Number(page) || 1;

  const totalPages = await fetchProjectsPages(query);
  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 ml-4">All Projects</h1>

      <ProjectSearch placeholder="Search projects..." />

      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>

      <Pagination totalPages={totalPages} />
    </main>
  );
}