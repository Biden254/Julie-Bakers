import { useState } from 'react'
import { galleryItems, eventTypes } from '../data/gallery'
import GalleryCard from './GalleryCard'

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.eventType === activeFilter)

  const handleCardClick = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
            Our Signature Creations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto leading-relaxed">
            Each cake is a masterpiece crafted with passion and precision. 
            From intimate celebrations to grand events, we create memories that taste as beautiful as they look.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-luxury p-1">
            {Object.entries(eventTypes).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === key
                    ? 'bg-gradient-to-r from-gold to-rose text-white shadow-md'
                    : 'text-brown/70 hover:text-brown hover:bg-beige/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brown/50 text-lg">No cakes found in this category.</p>
          </div>
        )}

        {/* Modal/Lightbox */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brown hover:bg-white transition-colors z-10 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative h-64 md:h-96">
                  <img 
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-serif text-3xl text-brown mb-2">{selectedItem.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose/10 text-rose">
                          {selectedItem.eventType === 'birthday' ? 'Birthday' : 'Anniversary'}
                        </span>
                        <span className="text-brown/70">{selectedItem.weightInKg}kg</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-brown mb-2">Flavor</h4>
                      <p className="text-brown/70">{selectedItem.flavor}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brown mb-2">Weight</h4>
                      <p className="text-brown/70">{selectedItem.weightInKg} kilograms</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-brown/10">
                    <h4 className="font-medium text-brown mb-2">About This Creation</h4>
                    <p className="text-brown/70 leading-relaxed">{selectedItem.shortDescription}</p>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button 
                      onClick={closeModal}
                      className="btn-secondary"
                    >
                      Close
                    </button>
                    <a 
                      href="/order" 
                      className="btn-primary"
                    >
                      Order Similar Cake
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default GallerySection
