import { useParams } from "react-router";

const Edit = () => {
    const params = useParams()

    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
}

export default Edit;
