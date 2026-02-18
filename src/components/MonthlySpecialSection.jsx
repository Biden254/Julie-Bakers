import { Link } from 'react-router-dom'

const MonthlySpecialSection = () => {
  const monthlySpecial = {
    id: 1,
    name: "Valentine's Special",
    image: "src/assets/gallery/Monthly/feb.jpg",
    description: "Heart-shaped red velvet with cream cheese frosting and rose petals",
    originalPrice: 6800,
    specialPrice: 5500,
    validUntil: "February 28, 2026",
    features: [
      "Premium red velvet cake",
      "Cream cheese frosting", 
      "Fresh rose petals",
      "Heart-shaped design",
      "Available in 1-3kg sizes"
    ]
  }

  const savings = monthlySpecial.originalPrice - monthlySpecial.specialPrice
  const savingsPercentage = Math.round((savings / monthlySpecial.originalPrice) * 100)

  return (
    <section className="py-20 bg-gradient-to-br from-rose/5 to-pink/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/90 backdrop-blur rounded-full mb-4">
            <svg className="w-5 h-5 text-rose" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 0L16.828 10l-1.172 1.171a4 4 0 01-5.656 0L10 13.657l-1.172 1.171a4 4 0 01-5.656 0L3.172 10l1.172-1.171a4 4 0 015.656 0z" clipRule="evenodd" />
            </svg>
            <span className="text-rose font-semibold">Monthly Special</span>
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-4">
            {monthlySpecial.name}
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Limited time offer - Handcrafted with love for your special moments
          </p>
        </div>
        
        {/* Special Offer Card */}
        <div className="relative bg-white rounded-3xl shadow-luxury overflow-hidden">
          {/* Special Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-rose to-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Save {savingsPercentage}%
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <img 
                src={monthlySpecial.image}
                alt={monthlySpecial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-brown">
                Limited Edition
              </div>
            </div>
            
            {/* Content */}
            <div className="bg-cream p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-brown mb-4">
                  {monthlySpecial.name}
                </h3>
                <p className="text-brown/70 leading-relaxed mb-6">
                  {monthlySpecial.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {monthlySpecial.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-brown/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pricing */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-brown/50 line-through text-lg">Ksh {monthlySpecial.originalPrice.toLocaleString()}</span>
                    <span className="bg-rose text-white px-2 py-1 rounded text-xs font-bold">SALE</span>
                  </div>
                  <div className="text-3xl font-bold text-brown mb-2">
                    Ksh {monthlySpecial.specialPrice.toLocaleString()}
                  </div>
                  <p className="text-sm text-brown/60">
                    Valid until {monthlySpecial.validUntil}
                  </p>
                </div>
                
                {/* CTA Button */}
                <Link 
                  to="/order?special=valentine"
                  className="w-full bg-gradient-to-r from-rose to-gold text-white py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Order This Special
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brown/10 rounded-full">
            <svg className="w-4 h-4 text-rose animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm-1-9a1 1 0 00-2 0v4a1 1 0 002 0v4a1 1 0 002 0v-4a1 1 0 00-2 0z" clipRule="evenodd" />
            </svg>
            <span className="text-brown/80 font-medium text-sm">
              Only {Math.ceil((new Date(monthlySpecial.validUntil) - new Date()) / (1000 * 60 * 60 * 24))} days left
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MonthlySpecialSection
