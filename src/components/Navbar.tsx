import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import AnimatedButton from "@/components/AnimatedButton";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Free Tools", to: "/free-tools" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                location.pathname === link.to
                  ? "text-foreground bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2">Login</a>
          <AnimatedButton size="sm">Get Started</AnimatedButton>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/[0.06] animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
                className={cn("px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === link.to ? "text-foreground bg-muted/50" : "text-muted-foreground hover:text-foreground"
                )}>
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-white/[0.06]">
              <a href="#" className="flex-1 text-center text-sm font-medium text-muted-foreground py-2.5">Login</a>
              <AnimatedButton size="sm" className="flex-1">Get Started</AnimatedButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
