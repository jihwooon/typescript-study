import {ReactNode} from "react";
import SearchBar from "@/app/components/searchbar";

interface Props {
    children: ReactNode
}

export default function SearchLayout({children}: Props) {
    return (
        <div>
            <SearchBar/>
            {children}
        </div>
    )
}
