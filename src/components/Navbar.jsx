import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700">
            AI in STEM
          </Link>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/pro-ai"
              className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium ${
                isActive('/pro-ai')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pro-AI
            </Link>
            <Link
              to="/anti-ai"
              className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium ${
                isActive('/anti-ai')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Anti-AI
            </Link>
            <Link
              to="/current-tech"
              className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium ${
                isActive('/current-tech')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Current Tech
            </Link>
            <Link
              to="/reflection"
              className={`px-3 py-2 rounded-lg text-sm md:text-base font-medium ${
                isActive('/reflection')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Reflection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

