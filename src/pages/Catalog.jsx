import { useState } from 'react'
import { Link } from 'react-router-dom'
import { galleryItems, eventTypes } from '../data/gallery'
import Footer from '../components/Footer'

const Catalog = () => {
  const [selectedEvent, setSelectedEvent] = useState('all')
  
  const filteredGalleryItems = selectedEvent === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.eventType === selectedEvent)
  
  return (
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-brown mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-brown/70 max-w-2xl mx-auto">
            Discover our handcrafted cakes made with love and premium ingredients
          </p>
        </div>

        {/* Event Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedEvent('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedEvent === 'all'
                ? 'bg-brown text-white'
                : 'bg-white text-brown border border-brown hover:bg-brown hover:text-white'
            }`}
          >
            All Cakes
          </button>
          {Object.entries(eventTypes).filter(([key]) => key !== 'all').map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedEvent(key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedEvent === key
                  ? 'bg-brown text-white'
                  : 'bg-white text-brown border border-brown hover:bg-brown hover:text-white'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Featured Carousel */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-rose/10 to-gold/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-rose text-sm font-semibold uppercase tracking-wider mb-2">
                  Featured This Month
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-brown mb-4">
                  {filteredGalleryItems[0]?.title || 'Featured Cake'}
                </h2>
                <p className="text-brown/70 mb-6 leading-relaxed">
                  {filteredGalleryItems[0]?.shortDescription || 'Delicious handcrafted cake perfect for your special occasion.'}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-brown">KES {(filteredGalleryItems[0]?.weightInKg * 1800 || 5500).toLocaleString()}</span>
                  <span className="text-brown/60">#featured</span>
                </div>
                <Link 
                  to={`/order?cake=${filteredGalleryItems[0]?.id}`}
                  className="btn-primary"
                >
                  Order Now
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={filteredGalleryItems[0]?.image || 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop'}
                  alt="Featured Cake"
                  className="w-full h-80 object-cover rounded-2xl shadow-luxury"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-brown">
                  Featured
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cake Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleryItems.map((item) => (
            <div key={item.id} className="card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-brown mb-2">{item.title}</h3>
                <p className="text-brown/60 mb-4 text-sm">{item.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-brown">KES {(item.weightInKg * 1800 || 5500).toLocaleString()}</span>
                  <Link 
                    to={`/order?cake=${item.id}`}
                    className="text-gold hover:text-brown transition-colors duration-300 font-medium"
                  >
                    Order →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGalleryItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brown/60 text-lg">No cakes found in this event category.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default Catalog
