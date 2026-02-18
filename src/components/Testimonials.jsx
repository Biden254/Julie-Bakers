const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Loren D.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1589635823089-774fca28fe13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortQuote: "Amazing birthday cake!"
    },
    {
      id: 2,
      name: "Michael R.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortQuote: "Best wedding cake ever!"
    },
    {
      id: 3,
      name: "Jean W.",
      rating: 5,
      image: "https://images.pexels.com/photos/2764975/pexels-photo-2764975.jpeg",
      shortQuote: "Simply perfect!"
    },
    {
      id: 4,
      name: "Paul O.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1563721572772-fbf713fff374?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortQuote: "Incredible flavors!"
    },
    {
      id: 5,
      name: "Lisa T.",
      rating: 5,
      image: "https://images.pexels.com/photos/4654356/pexels-photo-4654356.jpeg",
      shortQuote: "Beautiful and delicious!"
    },
    {
      id: 6,
      name: "Federika I.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortQuote: "Exceeded expectations!"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-4">
            Happy Customers
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center group">
              <div className="relative mb-4 mx-auto w-24 h-24">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover border-4 border-cream shadow-soft group-hover:shadow-luxury transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-2 -right-2 bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                  {testimonial.rating}
                </div>
              </div>
              <p className="font-serif text-brown font-medium mb-1">{testimonial.name}</p>
              <p className="text-sm text-brown/60 italic">{testimonial.shortQuote}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-beige/50 px-8 py-4 rounded-full">
            <span className="text-brown font-medium">500+ Happy Customers</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
