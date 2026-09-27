import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import { updateProject } from '@/lib/actions';

type EditProjectPageProps = {
    params: Promise<{id: string}>;
};

export default async function EditProjectPage({params,}: EditProjectPageProps) {
    // Get the ID from the URL.
    const { id } = await params;

    // Get the project from the database.
    const result = await sql`
    SELECT id, title, description, technologies
    FROM projects
    WHERE id = ${id}
    `;

    // If the project doesn't exits, show  the 404 page.
    if (result.rows.length === 0) {
        notFound();
    }

    // Get the project
    const project = result.rows[0];

    // Connect this specific project ID to the server Action.
    const updateProjectWithId =updateProject.bind(null, id);

    return (
        <main className="max-w-2xl mx-auto px-6 py-12">

            <h1 className="text-4xl font-bold mb-8">
                Edit Project
            </h1>

            <form
                action={updateProjectWithId}
                className="space-y-6"
                >

                {/* Project title */}
                <div>
                <label
                    htmlFor="title"
                    className="block font-medium mb-2"
                >
                    Project Title
                </label>

                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    defaultValue={project.title}
                    className="w-full border rounded-lg p-3"
                />
                </div>

                {/* Description */}
                <div>
                <label
                    htmlFor="description"
                    className="block font-medium mb-2"
                >
                    Description
                </label>

                <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    defaultValue={project.description}
                    className="w-full border rounded-lg p-3"
                />
                </div>

                {/* Technologies */}
                <div>
                <label
                    htmlFor="technologies"
                    className="block font-medium mb-2"
                >
                    Technologies
                </label>

                <input
                    id="technologies"
                    name="technologies"
                    type="text"
                    required
                    defaultValue={project.technologies}
                    className="w-full border rounded-lg p-3"
                />
                </div>

                {/* Submit */}
                <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
                >
                Update Project
                </button>

            </form>
        </main>
    );
} 