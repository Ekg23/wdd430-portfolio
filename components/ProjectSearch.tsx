'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch({placeholder}: {placeholder: string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) =>{
        const params = new URLSearchParams(searchParams);
        params.set('page', '1'); //This always reset the page 1 on a new search

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    
    return (
        <input
        type="text"
        placeholder={placeholder}
        aria-label="Search projects"
        className="border rounded-md px-3 py-2 w-full max-w-md ml-4"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        />
    );
}