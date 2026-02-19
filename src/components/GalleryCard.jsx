import { useState } from 'react'

const GalleryCard = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-luxury bg-white transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img 
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-lg text-brown leading-tight">{item.title}</h3>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-rose/10 text-rose ml-2 flex-shrink-0">
            {item.eventType === 'birthday' ? 'Birthday' : 'Anniversary'}
          </span>
        </div>
        
        <p className="text-brown/70 text-sm leading-relaxed line-clamp-2">
          {item.shortDescription}
        </p>
        
        {/* View indicator */}
        <div className={`flex items-center text-gold text-sm font-medium mt-4 transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-70'}`}>
          <span>View Details</span>
          <svg className="w-4 h-4 ml-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
