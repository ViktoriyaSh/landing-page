import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (no re-hiding).
 * threshold: 0–1, how much of the element must be visible before triggering.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
