import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Twitter, } from "lucide-react";
import { Button } from "../components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Inkjet Media", href: "/inkjet-media" },
    { label: "Solvent Media", href: "/solvent-media" },
    { label: "DTF Media", href: "/dtg-films" },
    { label: "Finishing Films", href: "/finishing-films" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20 md:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Mediahaus home">
            <img src="/logo.png" alt="Mediahaus logo" className="h-8 md:h-10 w-auto block dark:hidden" />
            <img src="/Mediahaus logo no lens.png" alt="Mediahaus logo" className="h-8 md:h-10 w-auto hidden dark:block" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 pr-2 mr-2 border-r border-border">
              <a
                href="https://www.facebook.com/profile.php?id=61563956113914"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram (coming soon)"
                className="text-muted-foreground hover:text-accent transition-colors"
                title="Instagram (coming soon)"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X (coming soon)"
                className="text-muted-foreground hover:text-accent transition-colors"
                title="X (formerly Twitter) (coming soon)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <ThemeToggle />
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
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-secondary text-accent' : 'text-foreground hover:bg-secondary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-secondary text-accent' : 'text-foreground hover:bg-secondary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="flex items-center gap-4 px-4 py-3">
              <a
                href="https://www.facebook.com/profile.php?id=61563956113914"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram (coming soon)" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X (coming soon)" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
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
