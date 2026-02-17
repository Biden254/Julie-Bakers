import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-2xl text-brown font-semibold">
            Julie Bakers
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-brown hover:text-gold transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className="text-brown hover:text-gold transition-colors duration-300 font-medium"
            >
              Catalog
            </Link>
            <Link 
              to="/order" 
              className="text-brown hover:text-gold transition-colors duration-300 font-medium"
            >
              Order
            </Link>
          </div>
          
          <Link 
            to="/order" 
            className="btn-primary text-sm"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
