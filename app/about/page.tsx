import TechStack from "@/components/TechStack";

const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Kotlin",
    "Python",
    "C#"
];


export default function () {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
                This abut page shares more information about my background and work
            </p>
            <TechStack technologies={technologies} />
        </main>
    );
}