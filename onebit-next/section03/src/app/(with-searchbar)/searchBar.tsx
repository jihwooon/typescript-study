'use client'

import { useState } from "react";

export default function SearchBar() {
    const[search, setSearch] = useState("")

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    console.log("클라이언트 컴포넌트 실행")

    return <div>
        <input type={search} onChange={onChangeSearch}/>
        <button>검색</button>
    </div>
}
