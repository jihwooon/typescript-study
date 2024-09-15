import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from './searchable-layout.module.css'

interface Props {
  children: React.ReactNode
}

export default function SearchableLayout({ children }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string

  useEffect(() => {
    setSearch(q || "")
  }, [q]);

  const onChangeSearch =(e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = () => {
    if(!search || q === search) return;

    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  }

  return (
    <div>
      <div className={style.searchbar_container}>
        <input placeholder="검색어를 입력하세요...." value={search} onChange={onChangeSearch} onKeyDown={onKeyDown}/>
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  )
}
