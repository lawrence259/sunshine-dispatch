import { Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Truck className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="font-bold text-foreground">Good Day Dispatch</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Good Day Dispatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
