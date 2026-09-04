interface TechStackProps {
    technologies: string[];
}

export default function TechStack({ technologies}: TechStackProps) {
    return (
        <section>
            <h2 className="mb-8 mt-5 text-center text-3xl font-bold">Technologies I Work With</h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {technologies.map((technology) => (
                <div key={technology}
                className="rounded-lg border p-6 text-center font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    {technology}
                </div>    
                    ))}
            </div>
        </section>
    )
}