import ProjectList from '@/components/ProjectList'

const projects = [
  {
    title: 'Smoothie Receipes App',
    description: 'A Backend Express.js app with frontend for viewing smoothies receipes.',
    technologies: ['Express.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
    link: 'https://github.com/Ekg23/smoothie-login-app'

  },

  {
    title: 'Art Gallery App',
    description: 'A frontend app for viewing art, art history and artist.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/Ekg23/WDD-330-Final-Project'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer leraning Next.js and React Here are some of my recent projects.
        </p>
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}