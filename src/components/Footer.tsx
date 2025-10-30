import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">MEDIAHAUS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <span className="hidden md:inline-block opacity-40">•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61563956113914"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="TikTok (coming soon)"
              title="TikTok (coming soon)"
            >
              TikTok
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="Instagram (coming soon)"
              title="Instagram (coming soon)"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              aria-label="X (formerly Twitter) — coming soon"
              title="X (formerly Twitter) — coming soon"
            >
              X
            </a>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            <p>© {currentYear} MEDIAHAUS — All rights reserved.</p>
            <p className="mt-1">A DesignMedia Production.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
