import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        return () => {
            console.log('언마운트')
        }
    })

    return <div>짝수입니다.</div>
}

export default Even;
