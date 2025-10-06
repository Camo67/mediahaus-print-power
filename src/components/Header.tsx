import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MEDIAHAUS" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <a href="/contact">Request Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full">
                <a href="/contact">Request Quote</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
