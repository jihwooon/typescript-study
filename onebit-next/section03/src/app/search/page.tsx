export default function Search({searchParams}:{
    searchParams: {
        q?: string
    }
}) {
    return <h1>{searchParams.q}</h1>
}
