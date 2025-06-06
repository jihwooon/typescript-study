import BookItem from "@/components/book-item";
import style from "./page.module.css";
import {BookData} from "@/types";

export const dynamic = "auto";
// 1. auto
// 2. force-dynamic
// 3. force-static
// 4. error

async function AllBooks() {
    const response = await fetch(`http://localhost:12345/book`, {
        cache: "force-cache"
    });
    if (!response.ok) {
        return <div>오류가 발생했습니다.</div>
    }

    const allBooks: BookData[] = await response.json();

    return (
        <div>
            {allBooks.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    )
}

async function RecoBooks() {
    const response = await fetch(`http://localhost:12345/book/random`, {
        next: { revalidate: 3}
    });

    const randomBooks: BookData[] = await response.json();

    return (
        <div>
            {
                randomBooks.map((book) => (
                    <BookItem key={book.id} {...book} />
                ))
            }
        </div>
    )
}

export default function Home() {

    return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
          <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
          <AllBooks />
      </section>
    </div>
  );
}
