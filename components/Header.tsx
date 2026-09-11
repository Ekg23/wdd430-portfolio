import Link from 'next/link'
import NavLinks from './NavLinks';

export default function Header() {
    return(
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="text-2xl font-bold mx-4">Geoffrey Etu</div>
            <nav className="max-w-4xl mx-auto px-4 flex justify-end items-center">
                <NavLinks />
            </nav>
        </header>
    );
}