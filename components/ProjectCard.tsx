import { deleteProject } from "@/lib/actions";
interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
} // This creates a blue print for the information that projectCard expects.

export default function ProjectCard({id, title, description, technologies, link}: ProjectCardProps) {
    return (
        <article className="p-4 border-2 border-gray-600 bg-gray-150 rounded-lg ml-4 max-w-xl">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-3">{description}</p>
            <p className="text-sm text-gray-600">
                <strong>Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-2">
                    <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View Project</a>
                </p>
            )}
             <div className="mt-4 flex gap-3">
                <a
                    href={`/projects/${id}/edit`}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Edit
                </a>

                {/* Delete button will go here */}
                <form action={deleteProject}>
                    <input type="hidden" name="id" value={id} />

                    <button
                        type="submit"
                        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </form>
            </div>
        </article>
    );
}