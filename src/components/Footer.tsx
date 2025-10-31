import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTok";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">MEDIAHAUS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <Link to="/contact" className="text-sm hover:text-foreground transition-colors">
              Contact
            </Link>
            <span className="hidden md:inline-block opacity-40">•</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563956113914"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mediahausmarketin?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="TikTok"
                title="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
                aria-label="Instagram (coming soon)"
                title="Instagram (coming soon)"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/mediahaus"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
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
