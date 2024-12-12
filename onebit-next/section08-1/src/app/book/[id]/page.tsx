import style from "./page.module.css";
import {BookData, ReviewData} from "@/types";
import NotFound from "@/app/not-found";
import ReviewEditor from "@/components/review-editor";
import ReviewList from "@/components/review-list";
import Image from "next/image";

export function generateStaticParams() {
    return [{id: "1"}, {id: "2"}, {id: "3"}]
}

async function BookDetail({bookId}: { bookId: string }) {
    const response = await fetch(`http://localhost:12345/book/${bookId}`, {
        next: { tags: [`review-${bookId}`]}
    });
    if (!response.ok) {
        return <NotFound/>
    }

    const book: BookData = await response.json();

    const {
        id,
        title,
        subTitle,
        description,
        author,
        publisher,
        coverImgUrl,
    } = book;

    return (
        <section>
            <div
                className={style.cover_img_container}
                style={{backgroundImage: `url('${coverImgUrl}')`}}
            >
                <Image src={coverImgUrl} alt={`${title}의 표지`} width={240} height={300}/>
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>
                {author} | {publisher}
            </div>
            <div className={style.description}>{description}</div>
        </section>
    );
}

export default function Page(
    {
        params,
    }: {
        params: { id: string };
    }) {
    return <div className={style.container}>
        <BookDetail bookId={params.id}/>
        <ReviewEditor bookId={params.id}/>
        <ReviewList bookId={params.id}/>
    </div>
}
