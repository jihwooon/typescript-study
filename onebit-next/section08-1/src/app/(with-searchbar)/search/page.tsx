import BookItem from "@/components/book-item";
import {BookData} from "@/types";
import {delay} from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import {Metadata} from "next";

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

export async function generateMetadata({ searchParams }: { searchParams : Promise<{ q?: string }>;}) {
    const { q } = await searchParams;

    return {
        title: `${q} : 한입 북스`,
        description: `${q}의 검색 결과입니다.`,
        openGraph: {
            title: `${q} : 한입북스 검색`,
            description: `${q}의 검색 결과입니다.`,
            images: ['/assert/thumbnail.png']
        }
    }
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
          fallback={<BookListSkeleton count={3}/>}
      >
          <SearchResult q={searchParams.q || ""}/>
      </Suspense>
  )
}
