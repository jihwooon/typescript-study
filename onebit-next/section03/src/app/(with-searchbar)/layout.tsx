import { ReactNode } from "react";
import SearchBar from "@/conponents/searchBar";

export default function SearchLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    )
}
