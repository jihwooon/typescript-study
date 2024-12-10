import BookItem from "@/components/book-item";
import {BookData} from "@/types";
import {delay} from "@/util/delay";
import { Suspense } from "react";

async function SearchResult ({ q }: {q: string}) {
  await delay(1500);
  const response = await fetch(`http://localhost:12345/book/search?q=${q}`, {
    cache: "force-cache"
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  const books: BookData[] = await response.json();

  return (
      <div>
        {books.map((book) => (
            <BookItem key={book.id} {...book} />
        ))}
      </div>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return (
      <Suspense
          key={searchParams.q || ""}
          fallback={<div>로딩중...</div>}
      >
          <SearchResult q={searchParams.q || ""}/>
      </Suspense>
  )
}
