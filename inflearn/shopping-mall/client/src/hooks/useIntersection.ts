import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const useIntersection = (targetRef: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver>()
  const [intersercting, setIntersercting] = useState(false)

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        setIntersercting(entries.some(entry => entry.isIntersecting))
      })
    }
    return observerRef.current
  }, [observerRef.current])

  useEffect(() => {
    if(targetRef.current) {
      getObserver().observe(targetRef.current)
    }
  }, [targetRef.current])


  return intersercting
}

export default useIntersection
