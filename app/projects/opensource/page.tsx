export default async function OpenSourceProject() {
    const response = await fetch("http://localhost:3000/api/projects?type=opensource");
    const projects = await response.json();

    return (
        <main>
            <h1 className="text-4xl font-bold mb-12">Open Source Projects</h1>
        </main>
    );
}