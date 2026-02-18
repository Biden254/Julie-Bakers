import { flavors } from '../data/flavors'

const FlavorsPricingSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
            Flavors & Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto leading-relaxed">
            Premium quality ingredients, transparent pricing. Choose your favorite flavor and let us create something special.
          </p>
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {flavors.map((flavor) => (
            <div 
              key={flavor.id}
              className="bg-white rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-300 p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-xl text-brown mb-1 group-hover:text-gold transition-colors">
                    {flavor.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brown">Ksh {flavor.pricePerKg.toLocaleString()}</span>
                    <span className="text-brown/60 text-sm">per KG</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-rose/20 rounded-full flex items-center justify-center group-hover:from-gold/30 group-hover:to-rose/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 0L16.828 10l-1.172 1.171a4 4 0 01-5.656 0L10 13.657l-1.172 1.171a4 4 0 01-5.656 0L3.172 10l1.172-1.171a4 4 0 015.656 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Gold Accent Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-4"></div>
              
              {/* Flavor Description */}
              <p className="text-brown/60 text-sm leading-relaxed">
                {flavor.name.toLowerCase() === 'vanilla' && 'Classic and timeless, perfect for any celebration'}
                {flavor.name.toLowerCase() === 'chocolate' && 'Rich and decadent, made with premium cocoa'}
                {flavor.name.toLowerCase() === 'coffee' && 'Bold and aromatic, coffee lovers delight'}
                {flavor.name.toLowerCase() === 'lemon' && 'Fresh and zesty, bright citrus notes'}
                {flavor.name.toLowerCase() === 'coconut' && 'Tropical paradise, creamy and exotic'}
                {flavor.name.toLowerCase() === 'blueberry' && 'Sweet and tart, bursting with berry flavor'}
                {flavor.name.toLowerCase() === 'orange' && 'Citrus sunshine, vibrant and refreshing'}
                {flavor.name.toLowerCase() === 'pina colada' && 'Tropical escape, pineapple and coconut blend'}
                {flavor.name.toLowerCase() === 'blackforest' && 'German tradition, chocolate and cherry'}
                {flavor.name.toLowerCase() === 'whiteforest' && 'Elegant twist, white chocolate and cherry'}
                {flavor.name.toLowerCase() === 'lemon mint' && 'Cool and refreshing, perfect balance'}
                {flavor.name.toLowerCase() === 'vanilla mint' && 'Smooth and cool, classic with a twist'}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold/10 to-rose/10 rounded-full">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 00-3.976 3.631 3.066 3.066 0 00-1.745.723 3.066 3.066 0 00-3.951-.723A3.066 3.066 0 006.267 3.455zM3.452 4.834a4.834 4.834 0 003.047 1.334L4.2 12.023a1 1 0 00.502 1.21l2.557 1.279a4.834 4.834 0 003.047-1.334L6.318 2.244a1 1 0 00-.502-1.21L3.452 4.834zM12 12a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
            </svg>
            <span className="text-brown/80 font-medium">All prices include premium ingredients and artisanal craftsmanship</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlavorsPricingSection
