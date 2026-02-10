import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnkiIcon from "./EnkiIcon";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Empreendimentos", path: "/empreendimentos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 transition-all duration-500"
        style={{ height: scrolled ? 64 : 88 }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <EnkiIcon
            size={scrolled ? 20 : 24}
            color={scrolled ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))"}
          />
          <span
            className={`font-display text-lg tracking-enki-wide uppercase font-bold transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            ENKI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-enki-wide uppercase transition-all duration-300 hover:opacity-100 ${
                location.pathname === item.path ? "opacity-100" : "opacity-60"
              } ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-sm tracking-enki-wide uppercase py-2 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
