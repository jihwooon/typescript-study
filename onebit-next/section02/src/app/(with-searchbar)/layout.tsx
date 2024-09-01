import Searchbar from '@/app/(with-searchbar)/searchbar';

interface Props {
  children: React.ReactNode;
}

export default function SearchLayout({ children }: Props) {
  return (
    <div>
      <div>서치바</div>
      <Searchbar />
      <div>{children}</div>
    </div>
  );
}
