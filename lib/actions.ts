'use server'
import {z} from 'zod';
import {sql} from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect} from 'next/navigation';
import { title } from 'process';

const currentYear = new Date().getFullYear()

// project schema defines the rules for our project form.
const ProjectFormSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(10),
    technologies: z.string().min(2),
    yearCompleted: z.coerce
      .number()
      .int('Year must be a whole number.')
      .gte(2000, 'Year must be 200 or later.')
      .lte(currentYear, `Year cannot be greater thab ${currentYear}`)
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

// Create Project
export async function createProject(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    technologies: formData.get('technologies'),
    yearCompleted: formData.get('yearCompleted'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create project.',
    };
  }

  const { title, description, technologies, yearCompleted } = validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, year_completed)
      VALUES (${title}, ${description}, ${technologies}, ${yearCompleted})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to create project.',
    };
  }

  revalidatePath('/projects');
  redirect('/projects');
}

// Update project
export async function updateProject(id: string, formData: FormData) {
    // Get values submitted by the edit form
    const raw = {
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies')
    };

    const parsed = ProjectFormSchema.safeParse(raw);
    if(!parsed.success) {
        throw new Error('Invalid project input.');
    }
    try {
      const { title, description, technologies } = parsed.data;
      await sql`
      UPDATE projects
      SET 
          title = ${title},
          description = ${description},
          technologies = ${technologies}
        WHERE id = ${id}
      `;
    } catch(error) {
         // If the database query fails, handle the error here.
        console.error('Error update project:', error);
        throw new Error('Failed to update project. Please try again');
    }
    

    // Make the projects page use fresh data.
  revalidatePath('/projects');

  // Return to the projects list.
  redirect('/projects')

}


// DELETE PROJECT
export async function deleteProject(formData: FormData) {
  // Get the project ID from the hidden form field.
  const id = formData.get('id');

  // Make sure an ID was provided.
  if (!id || typeof id !== 'string') {
    throw new Error('Project ID is required.');
  }

  try {
    // Delete only the project with this ID.
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `;
  } catch (error) {
    // Log the actual database error.
    console.error('Error deleting project:', error);

    // Show a user-friendly message.
    throw new Error('Failed to delete the project. Please try again.');
  }

  // Refresh the projects page.
  revalidatePath('/projects');

  // Return to the projects page.
  redirect('/projects');
}