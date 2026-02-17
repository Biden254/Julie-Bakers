import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown/90 to-brown/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664205765657-21824962abe2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5JTIwc3Rvcnl8ZW58MHx8MHx8fDA%3D'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            Crafting sweet memories since 2020
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-brown mb-6">From Passion to Profession</h2>
              <div className="space-y-4 text-brown/70 leading-relaxed">
                <p>
                  Julie Bakers began as a small home kitchen with a big dream - to create cakes that not only taste amazing but also bring joy to every celebration. What started as experimenting with family recipes has grown into Nairobi's most beloved boutique bakery.
                </p>
                <p>
                  Our commitment to quality means using only the finest ingredients - from premium Madagascar vanilla to locally sourced fresh fruits. Every cake is handcrafted with attention to detail and decorated with artistic precision.
                </p>
                <p>
                  Today, we're proud to be part of thousands of celebrations across Kenya, from intimate birthday gatherings to grand wedding receptions. Each cake tells a story, and we're honored to be part of yours.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661662901676-2df9f56e3946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFrZXJ5JTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Julie Bakers Kitchen"
                className="rounded-2xl shadow-luxury w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-brown text-center mb-16">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 0L16.828 10l-1.172 1.171a4 4 0 01-5.656 0L10 13.657l-1.172 1.171a4 4 0 01-5.656 0L3.172 10l1.172-1.171a4 4 0 015.656 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Quality Ingredients</h3>
              <p className="text-brown/70">Only the finest, locally sourced ingredients make it into our cakes</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 00-3.976 3.631 3.066 3.066 0 00-1.745.723 3.066 3.066 0 00-3.951-.723A3.066 3.066 0 006.267 3.455zM3.452 4.834a4.834 4.834 0 003.047 1.334L4.2 12.023a1 1 0 00.502 1.21l2.557 1.279a4.834 4.834 0 003.047-1.334L6.318 2.244a1 1 0 00-.502-1.21L3.452 4.834zM12 12a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Artisan Craft</h3>
              <p className="text-brown/70">Every cake is handcrafted with passion and artistic precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 0L16.828 10l-1.172 1.171a4 4 0 01-5.656 0L10 13.657l-1.172 1.171a4 4 0 01-5.656 0L3.172 10l1.172-1.171a4 4 0 015.656 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-brown mb-3">Customer Joy</h3>
              <p className="text-brown/70">Your celebration is our success - we're here to make it special</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brown mb-2">5000+</div>
              <p className="text-brown/70">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brown mb-2">10000+</div>
              <p className="text-brown/70">Cakes Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brown mb-2">50+</div>
              <p className="text-brown/70">Cake Varieties</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brown mb-2">4.9★</div>
              <p className="text-brown/70">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-brown mb-6">Ready to Sweeten Your Celebration?</h2>
          <p className="text-lg text-brown/70 mb-8">
            Let us create the perfect cake for your special moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog" 
              className="btn-secondary"
            >
              Browse Our Cakes
            </a>
            <a 
              href="/order" 
              className="btn-primary"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
