import { useState } from 'react'
import classNames from 'classnames'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              MiLogo
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Inicio
              </a>
              <a
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Acerca de
              </a>
              <a
                href="/services"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Servicios
              </a>
              <a
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Contacto
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-gray-300"
            >
              {isOpen ? (
                <span>&#x2715;</span>
              ) : (
                <span>&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={classNames('md:hidden', {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Inicio
          </a>
          <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Acerca de
          </a>
          <a
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Servicios
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
