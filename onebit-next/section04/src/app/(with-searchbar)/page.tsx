import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

export async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY_SERVER_URL}/book`);
  if (!response.ok) {
    return <div>Failed to load</div>;
  }

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY_SERVER_URL}/book/random`);
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  const recoBook: BookData[] = await response.json()

  return (
    <div>
      <h3>지금 추천하는 도서</h3>
      {
        recoBook.map((book) => (
          <BookItem key={book.id} {...book} />
        ))
      }
    </div>
  )
}

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <RecoBooks />
      </section>
      <section>
        <AllBooks />
      </section>
    </div>
  );
}
