import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16">
      <div className="max-6-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-display font-bold text-foreground inline-block mb-4"
            >
              <span className="text-primary">Eat</span>Forever
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Curated products with minimal ingredients for maximum longevity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Longevity Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Nutrition Facts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                hello@eatforever.com
              </li>
              <li className="text-muted-foreground">
                1-800-EAT-4EVER
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} EatForever. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
