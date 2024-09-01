import ClientComponent from '@/component/client-component';

export default function Page({ params }: { params: { id: string | string[] } }) {
  return (
    <div>
      {params.id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
