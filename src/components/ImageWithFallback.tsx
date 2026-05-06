import { useState, useEffect } from 'react'
import { getFallbackImage } from '../utils/imageUtils'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackCategory?: 'portfolio' | 'avatar' | 'general'
  fallbackIndex?: number
  onLoad?: () => void
  onError?: () => void
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackCategory = 'general',
  fallbackIndex = 0,
  onLoad,
  onError,
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleImageLoad = () => {
    setIsLoading(false)
    setHasError(false)
    onLoad?.()
  }

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true)
      const fallback = getFallbackImage(fallbackCategory, fallbackIndex)
      setImageSrc(fallback.url)
      onError?.()
    } else {
      // If fallback also fails, show a placeholder
      setIsLoading(false)
      onError?.()
    }
  }

  if (hasError && imageSrc === src) {
    // Show loading skeleton while trying to load fallback
    return (
      <div className={`${className} bg-white/10 animate-pulse`} />
    )
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onLoad={handleImageLoad}
      onError={handleImageError}
      style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}
