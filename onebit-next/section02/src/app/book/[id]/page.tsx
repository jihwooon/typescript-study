export default function Page({ params }: { params: { id: string | string[] } }) {
  return <div>{params.id}</div>;
}
