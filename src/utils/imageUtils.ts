// Image validation and fallback utilities

export interface FallbackImage {
  url: string
  alt: string
}

// Fallback images for verification categories
export const fallbackImages = {
  computers: [
    { url: '/images/verification/computer1.jpg', alt: 'Computer fallback 1' },
    { url: '/images/verification/computer2.jpg', alt: 'Computer fallback 2' },
    { url: '/images/verification/computer3.jpg', alt: 'Computer fallback 3' },
    { url: '/images/verification/computer4.jpg', alt: 'Computer fallback 4' },
  ],
  cars: [
    { url: '/images/verification/car1.jpg', alt: 'Car fallback 1' },
    { url: '/images/verification/car2.jpg', alt: 'Car fallback 2' },
    { url: '/images/verification/car3.jpg', alt: 'Car fallback 3' },
    { url: '/images/verification/car4.jpg', alt: 'Car fallback 4' },
  ],
  trees: [
    { url: '/images/verification/tree1.jpg', alt: 'Tree fallback 1' },
    { url: '/images/verification/tree2.jpg', alt: 'Tree fallback 2' },
    { url: '/images/verification/tree3.jpg', alt: 'Tree fallback 3' },
    { url: '/images/verification/tree4.jpg', alt: 'Tree fallback 4' },
  ],
  beaches: [
    { url: '/images/verification/beach1.jpg', alt: 'Beach fallback 1' },
    { url: '/images/verification/beach2.jpg', alt: 'Beach fallback 2' },
    { url: '/images/verification/beach3.jpg', alt: 'Beach fallback 3' },
    { url: '/images/verification/beach4.jpg', alt: 'Beach fallback 4' },
  ],
  buildings: [
    { url: '/images/verification/building1.jpg', alt: 'Building fallback 1' },
    { url: '/images/verification/building2.jpg', alt: 'Building fallback 2' },
    { url: '/images/verification/building3.jpg', alt: 'Building fallback 3' },
    { url: '/images/verification/building4.jpg', alt: 'Building fallback 4' },
  ],
  general: [
    { url: '/images/verification/default.jpg', alt: 'General fallback 1' },
    { url: '/images/verification/default.jpg', alt: 'General fallback 2' },
    { url: '/images/verification/default.jpg', alt: 'General fallback 3' },
    { url: '/images/verification/default.jpg', alt: 'General fallback 4' },
  ],
  portfolio: [
    { url: '/images/portfolio/default1.jpg', alt: 'Portfolio fallback 1' },
    { url: '/images/portfolio/default2.jpg', alt: 'Portfolio fallback 2' },
    { url: '/images/portfolio/default3.jpg', alt: 'Portfolio fallback 3' },
    { url: '/images/portfolio/default4.jpg', alt: 'Portfolio fallback 4' },
  ],
  avatar: [
    { url: '/images/avatar/default1.jpg', alt: 'Avatar fallback 1' },
    { url: '/images/avatar/default2.jpg', alt: 'Avatar fallback 2' },
  ],
}

// Cache for validated images to avoid repeated checks
const imageValidationCache = new Map<string, boolean>()

// Function to check if an image URL is valid
export async function validateImageUrl(url: string): Promise<boolean> {
  // Check cache first
  if (imageValidationCache.has(url)) {
    return imageValidationCache.get(url)!
  }

  return new Promise((resolve) => {
    const img = new Image()
    const timeout = setTimeout(() => {
      imageValidationCache.set(url, false)
      resolve(false)
    }, 5000) // 5 second timeout

    img.onload = () => {
      clearTimeout(timeout)
      imageValidationCache.set(url, true)
      resolve(true)
    }

    img.onerror = () => {
      clearTimeout(timeout)
      imageValidationCache.set(url, false)
      resolve(false)
    }

    img.src = url
  })
}

// Function to get a fallback image for a specific category
export function getFallbackImage(category: keyof typeof fallbackImages, index: number = 0): FallbackImage {
  const fallbacks = fallbackImages[category] || fallbackImages.general
  return fallbacks[index % fallbacks.length]
}

// Function to validate and get a working image URL
export async function getValidImageUrl(
  originalUrl: string,
  category: keyof typeof fallbackImages,
  index: number = 0
): Promise<string> {
  const isValid = await validateImageUrl(originalUrl)
  
  if (isValid) {
    return originalUrl
  }

  // If original image is invalid, return fallback
  const fallback = getFallbackImage(category, index)
  return fallback.url
}

// Function to validate multiple images and return working URLs
export async function validateImageUrls(
  urls: string[],
  category: keyof typeof fallbackImages
): Promise<string[]> {
  const validatedUrls = await Promise.all(
    urls.map(async (url, index) => {
      const isValid = await validateImageUrl(url)
      if (isValid) {
        return url
      }
      const fallback = getFallbackImage(category, index)
      return fallback.url
    })
  )

  return validatedUrls
}

// Function to preload images and validate them
export async function preloadAndValidateImages(urls: string[]): Promise<boolean[]> {
  return Promise.all(urls.map(url => validateImageUrl(url)))
}
