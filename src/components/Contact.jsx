import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Julie Bakers,\n\nNew Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254716866107?text=${encodedMessage}`, '_blank')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or send a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brown mb-1">Visit Our Bakery</h3>
                  <p className="text-brown/70">Elgon Avenue</p>
                  <p className="text-brown/70">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brown mb-1">Opening Hours</h3>
                  <p className="text-brown/70">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-brown/70">Sat-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brown mb-1">Call Us</h3>
                  <p className="text-brown/70">+254716866107</p>
                  <p className="text-brown/70">akeyojulie@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft">
              <iframe
                src="https://maps.app.goo.gl/pE4fdULN74qNDdWp8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Julie Bakers Location"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-soft">
                <p className="text-brown font-medium text-sm">📍 Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <h3 className="font-serif text-2xl text-brown mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-brown font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-brown/20 rounded-xl focus:outline-none focus:border-brown transition-colors resize-none"
                  placeholder="Tell us about your dream cake..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary text-lg"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
