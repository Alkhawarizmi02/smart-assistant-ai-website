import { useState } from 'react';
import LoginButton from './LoginButton';
import logo from '/src/assets/logo.svg'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = ['Home', 'Features', 'Pricing', 'Contact'];

  return (
    <header className="fixed top-4 right-8 left-8 max-md:right-1 max-md:left-1 max-w-6xl lg:m-auto mx-4 px-6 py-4 rounded-2xl bg-slate-100 shadow-md z-50">
      <nav className="m-auto w-full flex justify-between content-center">
        {/* Logo */}
        <img src={logo} alt="SmartAssistant AI Logo" className="h-11" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="max-md:text-sm font-semibold text-gray-600 hover:text-primary">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button for Desktop */}
        <div className="hidden md:block">
          <LoginButton />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden px-3 bg-accent text-primary text-sm font-bold border-2 border-primary rounded-2xl"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-20 right-4 flex flex-col gap-3 p-8 pr-24 bg-slate-100 rounded-2xl shadow-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-extrabold text-primary">
                {link}
              </a>
            </li>
          ))}
          <div className="absolute bottom-[90px] right-0 left-0 h-0.5 bg-gray-100"></div>
          <LoginButton />
        </ul>
      )}
    </header>
  );
}

export default Navbar;
