import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver(options = {}) {
  const [hasIntersected, setHasIntersected] = useState(false) 
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true) 
        }
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options]) // ← добавил hasIntersected в зависимости

  return { ref, isIntersecting: hasIntersected } // ← теперь isIntersecting = true навсегда
}
