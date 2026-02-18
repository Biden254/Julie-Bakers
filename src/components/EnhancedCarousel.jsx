import { useState, useEffect, useRef } from 'react'

const EnhancedCarousel = ({ items, autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const intervalRef = useRef(null)

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }, autoSlideInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, items.length, autoSlideInterval])

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide()
      } else {
        // Swipe right - previous slide
        prevSlide()
      }
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
    // Reset auto-slide timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    // Reset auto-slide timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    // Reset auto-slide timer when user manually navigates
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur w-10 h-10 rounded-full items-center justify-center shadow-soft hover:bg-white transition-all duration-300 hidden md:flex"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur w-10 h-10 rounded-full items-center justify-center shadow-soft hover:bg-white transition-all duration-300 hidden md:flex"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile Navigation - Semi-transparent arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300 md:hidden"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300 md:hidden"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Touch Surface for Mobile */}
      <div
        className="md:hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-brown w-8'
                : 'bg-brown/30 hover:bg-brown/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default EnhancedCarousel
