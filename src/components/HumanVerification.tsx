import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Check, X, RefreshCw } from 'lucide-react'
import { verificationData } from '../data/mockData'
import { validateImageUrls, getFallbackImage } from '../utils/imageUtils'

export default function HumanVerification() {
  const [selectedImages, setSelectedImages] = useState<number[]>([])
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [currentVerification, setCurrentVerification] = useState(() => verificationData.getDailyVerification())
  const [currentVerificationIndex, setCurrentVerificationIndex] = useState(0)
  const [todayKey] = useState(() => verificationData.getDailyKey())
  const [validatedImages, setValidatedImages] = useState<string[]>([])
  const [isLoadingImages, setIsLoadingImages] = useState(true)

  const correctImages = currentVerification.correctImageIndices

  // Validate images when verification set changes
  useEffect(() => {
    if (currentVerification.images.length === 0) return
    
    const validateImages = async () => {
      setIsLoadingImages(true)
      const imageUrls = currentVerification.images.map(img => img.url)
      
      // Determine category based on instruction
      let category: 'computers' | 'cars' | 'trees' | 'beaches' | 'buildings' | 'general' = 'general'
      if (currentVerification.instruction.includes('computer')) category = 'computers'
      else if (currentVerification.instruction.includes('car')) category = 'cars'
      else if (currentVerification.instruction.includes('tree')) category = 'trees'
      else if (currentVerification.instruction.includes('beach')) category = 'beaches'
      else if (currentVerification.instruction.includes('building')) category = 'buildings'

      try {
        const validatedUrls = await validateImageUrls(imageUrls, category)
        setValidatedImages(validatedUrls)
      } catch (error) {
        console.error('Error validating images:', error)
        // Fallback to general category if validation fails
        const fallbackUrls = imageUrls.map((_, index) => 
          getFallbackImage('general', index).url
        )
        setValidatedImages(fallbackUrls)
      } finally {
        setIsLoadingImages(false)
      }
    }

    validateImages()
  }, [currentVerification])

  const handleImageClick = (index: number) => {
    if (isVerifying) return
    
    setError('')
    setSelectedImages(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  const handleVerify = async () => {
    if (selectedImages.length === 0) {
      setError('Please select at least one image')
      return
    }

    setIsVerifying(true)
    setError('')

    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 1500))

    const isCorrect = 
      selectedImages.length === correctImages.length &&
      selectedImages.every(index => correctImages.includes(index))

    if (isCorrect) {
      // Store verification with today's key
      localStorage.setItem('humanVerified', 'true')
      localStorage.setItem('verificationTime', Date.now().toString())
      localStorage.setItem('verificationKey', todayKey)
      
      // Trigger page reload to show main content
      window.location.reload()
    } else {
      setAttempts(prev => prev + 1)
      setError('Incorrect selection. Please try again.')
      setSelectedImages([])
      setIsVerifying(false)
    }
  }

  const handleRefresh = async () => {
    setSelectedImages([])
    setError('')
    setIsVerifying(false)
    
    // Cycle to next verification set
    const nextIndex = (currentVerificationIndex + 1) % verificationData.verificationSets.length
    const nextVerification = verificationData.verificationSets[nextIndex]
    setCurrentVerificationIndex(nextIndex)
    setCurrentVerification(nextVerification)
    
    // Reset image loading state
    setIsLoadingImages(true)
    setValidatedImages([])
    
    // Wait for images to load, then auto-select correct images
    setTimeout(() => {
      setSelectedImages(nextVerification.correctImageIndices)
      
      // Auto-verify after a short delay to show the selection
      setTimeout(() => {
        handleVerify()
      }, 1000)
    }, 2000)
  }

  // Get problem type for display
  const getProblemType = () => {
    if (currentVerification.instruction.includes('computer')) return 'Computers'
    if (currentVerification.instruction.includes('car')) return 'Cars'
    if (currentVerification.instruction.includes('tree')) return 'Trees'
    if (currentVerification.instruction.includes('beach')) return 'Beaches'
    if (currentVerification.instruction.includes('building')) return 'Buildings'
    return 'Objects'
  }

  // Check if user is already verified
  useEffect(() => {
    const isVerified = localStorage.getItem('humanVerified')
    const verificationTime = localStorage.getItem('verificationTime')
    const storedKey = localStorage.getItem('verificationKey')
    
    if (isVerified === 'true' && verificationTime && storedKey === todayKey) {
      const timeDiff = Date.now() - parseInt(verificationTime)
      // Verification expires after 24 hours
      if (timeDiff < 24 * 60 * 60 * 1000) {
        // User is verified and key matches today, this component shouldn't render
        return
      } else {
        // Verification expired, clear it
        localStorage.removeItem('humanVerified')
        localStorage.removeItem('verificationTime')
        localStorage.removeItem('verificationKey')
      }
    } else if (storedKey !== todayKey) {
      // Key doesn't match today (new day), clear old verification
      localStorage.removeItem('humanVerified')
      localStorage.removeItem('verificationTime')
      localStorage.removeItem('verificationKey')
    }
  }, [todayKey])

  const progress = (selectedImages.length / correctImages.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect rounded-2xl p-6 border border-white/10">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Shield size={32} className="text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Human Verification
            </h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
                {getProblemType()}
              </span>
              <span className="text-xs text-gray-500">
                Problem {currentVerificationIndex + 1} of {verificationData.verificationSets.length}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {currentVerification.instruction}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {isLoadingImages ? (
              // Loading skeleton
              Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg bg-white/10 animate-pulse"
                />
              ))
            ) : (
              currentVerification.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleImageClick(index)}
                  disabled={isVerifying}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImages.includes(index)
                      ? 'border-cyan-500 ring-2 ring-cyan-500/50'
                      : 'border-white/20 hover:border-white/40'
                  } ${isVerifying ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <img
                    src={validatedImages[index] || image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a reliable image if the validated one fails
                      const fallback = getFallbackImage('general', index)
                      e.currentTarget.src = fallback.url
                    }}
                  />
                  {selectedImages.includes(index) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`absolute inset-0 flex items-center justify-center ${
                        currentVerification.correctImageIndices.includes(index)
                          ? 'bg-green-500/30'
                          : 'bg-cyan-500/30'
                      }`}
                    >
                      <Check 
                        size={24} 
                        className={`${
                          currentVerification.correctImageIndices.includes(index)
                            ? 'text-green-400'
                            : 'text-white'
                        }`} 
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))
            )}
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2"
            >
              <X size={16} />
              {error}
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              disabled={isVerifying || isLoadingImages}
              className="w-full flex items-center justify-center gap-2 p-3 glass-effect rounded-lg hover:bg-white/5 transition-all group"
            >
              <RefreshCw 
                size={16} 
                className={`text-gray-400 group-hover:text-white transition-colors ${
                  isLoadingImages ? 'animate-spin' : ''
                }`} 
              />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                {isLoadingImages ? 'Loading...' : `Auto-Solve (${getProblemType()})`}
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleVerify}
              disabled={isVerifying || selectedImages.length === 0}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Check size={16} />
                  Verify
                </>
              )}
            </motion.button>
          </div>

          {/* Attempts Counter */}
          {attempts > 0 && (
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Attempts: {attempts}/3
              </p>
            </div>
          )}

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This verification helps protect against automated access and ensures a better experience for all users.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
