import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown/90 to-brown/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Welcome to
            <br />
            <span className="text-gold">Julie Bakers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Discover and experience fine selection of artisanal cakes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="bg-white text-brown px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-luxury"
            >
              Explore Cakes
            </Link>
            <Link 
              to="/order" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brown transition-all duration-300"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brown mb-4">
              New Flavor Every Month
            </h2>
            <p className="text-lg text-brown/70 max-w-2xl mx-auto">
              Experience our seasonal creations and limited edition masterpieces
            </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-luxury">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop"
                  alt="Vanilla Bean"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-cream p-12 flex flex-col justify-center">
                <div className="text-rose text-sm font-semibold uppercase tracking-wider mb-2">
                  Nuevo Sabor
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-brown mb-4">
                  Vanilla Bean Elegance
                </h3>
                <p className="text-brown/70 mb-6 leading-relaxed">
                  Pure Madagascar vanilla beans meet our signature buttercream in this timeless classic. 
                  A delicate balance of sweetness and sophistication that captures the essence of artisanal baking.
                </p>
                <Link 
                  to="/catalog" 
                  className="btn-secondary self-start"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-2xl font-bold text-brown">KES 6,200</span>
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
                1/8
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

      {/* Additional Featured Items */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-luxury transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
              alt="Cookies & Cream"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
              Popular
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl text-brown mb-2">Cookies & Cream Dream</h3>
            <p className="text-brown/60 text-sm mb-4">Rich chocolate with cookie crunch</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-brown">KES 6,200</span>
              <Link to="/order?cake=2" className="text-gold hover:text-brown transition-colors font-medium">
                Order →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-luxury transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"
              alt="Salted Caramel"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-rose text-white px-3 py-1 rounded-full text-xs font-medium">
              New
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl text-brown mb-2">Salted Caramel Brownie</h3>
            <p className="text-brown/60 text-sm mb-4">Decadent caramel with sea salt</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-brown">KES 6,800</span>
              <Link to="/order?cake=3" className="text-gold hover:text-brown transition-colors font-medium">
                Order →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-luxury transition-all duration-300">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop"
              alt="Red Velvet"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
              Premium
            </div>
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl text-brown mb-2">Red Velvet Romance</h3>
            <p className="text-brown/60 text-sm mb-4">Classic red velvet with cream cheese</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-brown">KES 6,400</span>
              <Link to="/order?cake=6" className="text-gold hover:text-brown transition-colors font-medium">
                Order →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Create Your Own Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brown mb-4">
              Create Your Own Flavor
            </h2>
            <p className="text-lg text-brown/70 max-w-2xl mx-auto">
              Design your perfect cake with our custom ordering system
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop"
                  alt="Custom Cake"
                  className="w-full h-64 object-cover rounded-2xl shadow-soft"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ¡Quiero!
                </div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Custom Designs</h3>
              <p className="text-brown/60">Personalized themes and decorations</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1612198914040-9a2e6d7eb3d9?w=300&h=300&fit=crop"
                  alt="Premium Ingredients"
                  className="w-full h-64 object-cover rounded-2xl shadow-soft"
                />
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Premium Ingredients</h3>
              <p className="text-brown/60">Only the finest quality materials</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop"
                  alt="Artisanal Craft"
                  className="w-full h-64 object-cover rounded-2xl shadow-soft"
                />
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Artisanal Craft</h3>
              <p className="text-brown/60">Handcrafted with love and expertise</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/order" 
              className="btn-primary text-lg px-12 py-4"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
