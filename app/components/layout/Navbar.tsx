import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `text-lg font-medium ${isActive ? 'text-primary' : 'text-foreground'}`;
  };

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              isScrolled
                  ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/30'
                  : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-6-container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
                href="/"
                className="text-xl md:text-2xl font-display font-bold text-foreground transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="text-primary">Eat</span>Forever
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className={getLinkClassName('/')}>
                Home
              </Link>
              <Link href="/products" className={getLinkClassName('/products')}>
                Products
              </Link>
              <Link href="/packages" className={getLinkClassName('/packages')}>
                Packages
              </Link>
              <Link href="/blog" className={getLinkClassName('/blog')}>
                Blog
              </Link>
              <Link href="/about" className={getLinkClassName('/about')}>
                About
              </Link>
              <button className="btn-primary">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-foreground p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div
              className={`md:hidden fixed inset-0 z-40 bg-white pt-20 transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col space-y-6 p-6">
              <Link href="/" className={getLinkClassName('/')}>
                Home
              </Link>
              <Link href="/products" className={getLinkClassName('/products')}>
                Products
              </Link>
              <Link href="/packages" className={getLinkClassName('/packages')}>
                Packages
              </Link>
              <Link href="/blog" className={getLinkClassName('/blog')}>
                Blog
              </Link>
              <Link href="/about" className={getLinkClassName('/about')}>
                About
              </Link>
              <button className="btn-primary w-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;