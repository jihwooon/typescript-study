export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return <div>{searchParams.q}</div>;
}
