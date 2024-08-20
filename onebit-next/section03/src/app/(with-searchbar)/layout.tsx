import { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div>서치바</div>
            {children}
        </div>
    )
}
