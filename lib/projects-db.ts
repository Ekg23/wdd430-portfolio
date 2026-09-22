import { sql } from '@vercel/postgres';

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProjects(
  query: string,
  currentPage: number): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`} OR
      description ILIKE ${`%${query}%`} OR
      type ILIKE ${`%${query}%`}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}

  `
  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*)
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`} OR
      description ILIKE ${`%${query}%`} OR
      type ILIKE ${`%${query}%`}
  `;

  const totalPages = Math.ceil(Number(rows[0].count) / ITEMS_PER_PAGE);
  return totalPages;
}



// type?: string | null means the function getProjects() can be empty or take type as parameter. 
export async function getProjects(type?: string | null): Promise<Project[]> {
  await new Promise(res => setTimeout(res, 2000));
  
  if (type) {
    const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
 
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
  SELECT * FROM projects WHERE id  = ${id}
  `;
  return rows[0] ?? null;
}
  