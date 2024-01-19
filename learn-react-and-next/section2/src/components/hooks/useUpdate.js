import { useRef, useEffect } from "react"

export default function useUpdate(callback) {
    const isMountRef = useRef(false)

    /**
     *  1. 마운트 (탄생)
     *  2. 업데이트 (변화, 리렌더)
     *  3. 언마운트 (죽음)
     */
    /* 업데이트 */
    useEffect(() => {
        if (!isMountRef.current) {
            isMountRef.current = true
            return
        }
        console.log("업데이트")
    })

    callback();
}
