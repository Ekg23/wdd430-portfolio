import Link from 'next/link'

export default function ProjectsLayout({ children}: {children: React.ReactNode}) {
    return(
        <section>
            <nav className="flex gap-4 items-center py-4 px-4">
                <Link href="/projects" className="hover:underline">Overview</Link>
                <Link href="/projects/opensource" className="hover:underline">Open Source</Link> | {' '}
                <Link href="/projects/school" className="hover:underline">School</Link>
            </nav>
            {children}
        </section>
    );
}