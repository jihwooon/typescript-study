type Props = {
    params: {
        id: string | string[];
    }
}

export default function Page({ params }: Props) {
    return <h1>{params.id}</h1>
}
