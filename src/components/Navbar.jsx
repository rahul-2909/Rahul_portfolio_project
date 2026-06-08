import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Handle scroll to make navbar more solid (throttled)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-gray-100'
          : 'bg-white py-6 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="text-gray-900 text-2xl font-black tracking-tight">
            Rahul<span className="text-red-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link;
            return (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                className={`font-medium relative group transition-colors duration-300 ${
                  isActive ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Right Side: Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden border-b border-gray-100 ${
          isOpen ? 'max-h-[520px] py-4 opacity-100 bg-white shadow-xl' : 'max-h-0 opacity-0 bg-white'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link;
            return (
              <a
                key={link}
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg border-b border-gray-100 pb-2 transition-colors ${
                  isActive ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
              </a>
            );
          })}
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors w-full text-center"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-colors w-full text-center shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
