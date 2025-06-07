import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';


// Lazy-loaded components for better performance
const Home = lazy(() => import('./pages/Home'));
const Students = lazy(() => import('./pages/Students'));
const Research = lazy(() => import('./pages/Research'));
const Teaching = lazy(() => import('./pages/Teaching'));
const Publications = lazy(() => import('./pages/Publications'));
const Contact = lazy(() => import('./pages/Contact'));
const SynergisticActivities = lazy(() => import('./pages/SynergisticActivities'));
const Gallery = lazy(() => import('./pages/Gallery'));

function App() {
  const [menuState, setMenuState] = useState({ isMenuOpen: false, isMoreOpen: false });

  const mainNavigation = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Students', href: '/students' },
    { name: 'Teaching', href: '/teaching' },
    { name: 'Contact', href: '/contact' },
  ];

  const moreNavigation = [
    { name: 'Synergistic Activities', href: '/synergistic-activities' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const handleLinkClick = () => {
    setMenuState({ isMenuOpen: false, isMoreOpen: false });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.more-dropdown')) {
        setMenuState((prev) => ({ ...prev, isMoreOpen: false }));
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-lg fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end h-16 items-center space-x-3">
              {/* Desktop Navigation */}
              {/* <div className="hidden md:flex md:items-center space-x-3">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleLinkClick}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative more-dropdown">
                  <button
                    onClick={() => setMenuState((prev) => ({ ...prev, isMoreOpen: !prev.isMoreOpen }))}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium flex items-center"
                    aria-expanded={menuState.isMoreOpen}
                    aria-label="Toggle more menu"
                  >
                    More <ChevronDown className="ml-2 h-5 w-5" />
                  </button>
                  {menuState.isMoreOpen && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                      {moreNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center space-x-3">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleLinkClick}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative more-dropdown">
                  <button
                    onClick={() => setMenuState((prev) => ({ ...prev, isMoreOpen: !prev.isMoreOpen }))}
                    className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium flex items-center"
                    aria-expanded={menuState.isMoreOpen}
                    aria-label="Toggle more menu"
                  >
                    More <ChevronDown className="ml-2 h-5 w-5" />
                  </button>
                  {menuState.isMoreOpen && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                      {moreNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMenuState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }))}
                  className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {menuState.isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Menu */}
              {menuState.isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-4 py-4 space-y-2 z-20">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      className="block text-gray-600 hover:text-indigo-600 text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="border-gray-200" />
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      className="block text-gray-600 hover:text-indigo-600 text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}


            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16 flex-grow">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/research" element={<Research />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/synergistic-activities" element={<SynergisticActivities />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </div>

        {/* Redesigned Footer */}
        <footer className="bg-gray-900 text-white py-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-lg">&copy; {new Date().getFullYear()} Anilkumar Bachu. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://www.facebook.com/anilkumar.bachu.547" className="text-gray-400 hover:text-white"><Facebook className="w-6 h-6" /></a>
                <a href="https://x.com/anilkumar08689" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/anilkumar-bachu/" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:anilkumar@iitp.ac.in" className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
