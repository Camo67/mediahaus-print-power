import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MEDIAHAUS" className="h-8 w-auto" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
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
