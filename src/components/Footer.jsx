import { Link } from 'react-router-dom'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/_juliebakers'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@_juliebakers?_r=1&_t=ZS-93yfuAfF7NA'
    }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'Order', path: '/order' },
    { name: 'About', path: '/about' }
  ]

  return (
    <footer className="bg-brown text-cream mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-6">Julie Bakers</h3>
            <p className="text-cream/90 mb-8 leading-relaxed max-w-md">
              Creating beautiful, delicious cakes for every celebration. 
              Made with love and finest ingredients since 2020.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-brown transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="text-cream/80 group-hover:text-brown transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-cream/10 p-6 rounded-2xl">
              <h4 className="font-serif text-xl mb-3">Sweet Updates</h4>
              <p className="text-cream/80 mb-4 text-sm">Get new flavors and special offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-cream/20 border border-cream/30 rounded-xl text-cream placeholder-cream/50 focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold text-brown px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-6">Visit Us</h4>
            <div className="space-y-4 text-cream/80">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p>Elgon Avenue</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>+254 716866107</p>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>akeyojuliet@gmail.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-brown/20">
              <h5 className="font-medium mb-3">Hours</h5>
              <div className="space-y-1 text-cream/80 text-sm">
                <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/80 text-sm">
              © 2026 Julie Bakers. All rights reserved. Made with ❤️ and lots of butter.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
