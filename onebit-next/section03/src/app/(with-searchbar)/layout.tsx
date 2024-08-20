import { ReactNode } from "react";
import SearchBar from "@/app/(with-searchbar)/searchBar";

export default function SearchLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    )
}
