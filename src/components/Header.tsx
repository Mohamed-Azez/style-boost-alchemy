
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Contact us: 02 23082250</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-900">ERTC</span>
                    <div className="text-xs text-gray-600">Academy</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">About Us</Link>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                    Individual
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
                    Corporate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Blog</a>
                <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact Us</a>
                <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">العربية</a>
              </div>
            </div>

            {/* Search and Mobile menu button */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-emerald-600">
                <Search className="w-5 h-5" />
              </Button>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-emerald-600 font-medium">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About Us</Link>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Individual</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Corporate</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">العربية</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
