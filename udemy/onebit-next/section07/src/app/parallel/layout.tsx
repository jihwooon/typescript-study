import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  feed: React.ReactNode;
}

export default function Layout({ sidebar, children, feed }: Props) {
  return (
    <div>
      <div>
        <Link href={'/parallel'}>parallel</Link>
        <Link href={'/parallel/setting'}>parallel/setting</Link>
      </div>
      <br />
      {sidebar}
      {feed}
      {children}
    </div>
  );
}
