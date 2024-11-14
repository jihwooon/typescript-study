import Link from "next/link";

export default function Home() {
    return (
        <>
            {/*<Header/>*/}
            <main>
                <Link href="/about">About Us</Link>
                <Link href="/books">Blog Us</Link>
            </main>
        </>
    );
}
