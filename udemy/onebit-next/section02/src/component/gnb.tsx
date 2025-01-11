import Link from 'next/link';

export default function Gnb() {
  return (
    <header>
      <Link href={'/onebit-next/section02/public'}>Home</Link>
      &nbsp;
      <Link href={'/search'}>Search</Link>
      &nbsp;
      <Link href={'/book/1'}>Book</Link>
    </header>
  );
}
