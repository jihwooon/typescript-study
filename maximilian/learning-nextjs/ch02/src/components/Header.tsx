import Link from "next/link";

const CATEGORY = [
    {
        id: null,
        name: "전체"
    },
    {
        id: 0,
        name: "동화"
    },
    {
        id: 1,
        name: "소셜"
    },
    {
        id: 2,
        name: "사회"
    }
]

export default function Header() {
    return (
        <>
            <h1 className="logo">

            </h1>
            <nav className="category">
                <ul>
                    {
                        CATEGORY.map((item) => (
                            <li key={item.id}>
                                <Link href={item.id == null ? '/books' : `/books?category_id=${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <Link href="/login">로그인</Link>
                    </li>
                    <li>
                        <Link href="/login">회원가입</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
