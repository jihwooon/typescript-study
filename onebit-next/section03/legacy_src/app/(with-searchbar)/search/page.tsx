import ClientComponent from "@/conponents/client-component";

export default function Search({searchParams}:{
    searchParams: {
        q?: string
    }
}) {
    return (
        <div>Search 페이지 {searchParams.q}
            <ClientComponent>
               <></>
            </ClientComponent>
        </div>
    );
}
