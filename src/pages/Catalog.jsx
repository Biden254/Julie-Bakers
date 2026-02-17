import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cakes } from '../data/cakes'
import { cakeCategories } from '../data/cakeCategories'
import Footer from '../components/Footer'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredCakes = selectedCategory === 'all' 
    ? cakes 
    : cakes.filter(cake => cake.category === selectedCategory)
  
  return (
    <div className="min-h-screen py-20">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-brown text-white'
                : 'bg-white text-brown border border-brown hover:bg-brown hover:text-white'
            }`}
          >
            All Cakes
          </button>
          {cakeCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-brown text-white'
                  : 'bg-white text-brown border border-brown hover:bg-brown hover:text-white'
              }`}
            >
              {category.name}
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
                  Birthday Celebration
                </h2>
                <p className="text-brown/70 mb-6 leading-relaxed">
                  Classic vanilla with colorful sprinkles, perfect for making any celebration special. 
                  Our signature buttercream and moist cake layers create the perfect birthday experience.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-brown">KES {cakes[0].price.toLocaleString()}</span>
                  <span className="text-brown/60">#gütclassic</span>
                </div>
                <Link 
                  to="/order" 
                  className="btn-primary"
                >
                  Order Now
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
                  alt="Birthday Cake"
                  className="w-full h-80 object-cover rounded-2xl shadow-luxury"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-brown">
                  3/20
                </div>
              </div>
            </div>
            
            {/* Carousel Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-all duration-300">
              <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-all duration-300">
              <svg className="w-5 h-5 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cake Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div key={cake.id} className="card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-brown mb-2">{cake.name}</h3>
                <p className="text-brown/60 mb-4 text-sm">{cake.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-brown">KES {cake.price.toLocaleString()}</span>
                  <Link 
                    to={`/order?cake=${cake.id}`}
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
        {filteredCakes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brown/60 text-lg">No cakes found in this category.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default Catalog
