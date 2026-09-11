export default async function SchoolProject () {
    const response = await fetch("http://localhost:3000/api/project?type=school");
    const projects = await response.json()

     return(
        <main>
            <h1 className="text-4xl font-bold mb-12">School Projects</h1>
        </main>
     );   
}