import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CONTACT_URL = "https://jb-agiledev.com/contact";

const navLinks = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Regulation", href: "/#regulation" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Built in", href: "/#built-in" },
  { label: "Ownership", href: "/#ownership" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#2B1D16]/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <span className="font-heading text-xl font-bold tracking-wide text-text-light">Nigehbaan</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-text-light/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            className="bg-accent hover:bg-accent-hover text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Talk to us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-light"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#2B1D16]/95 backdrop-blur-md border-t border-white/10 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm text-text-light/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-accent text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full text-center"
          >
            Talk to us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
