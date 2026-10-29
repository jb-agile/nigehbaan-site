import jbLogo from "@/assets/brand/jb-agile-lockup-transparent-warm.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <a href="https://jb-agiledev.com" className="inline-flex items-center gap-4">
            <img src={jbLogo} alt="JB Agile" className="h-10 w-auto" />
            <span className="font-body text-sm" style={{ color: "#A99C8C" }}>
              A JB Agile product
            </span>
          </a>
          <a
            href="mailto:jawad@jb-agiledev.com"
            className="font-body text-sm hover:text-accent transition-colors"
            style={{ color: "#A99C8C" }}
          >
            jawad@jb-agiledev.com
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-3">
          <p className="font-body text-xs text-center" style={{ color: "#96876F" }}>
            © {new Date().getFullYear()} JB Agile. All rights reserved.
          </p>
          <span className="hidden md:inline font-body text-xs" style={{ color: "#96876F" }}>
            ·
          </span>
          <a
            href="https://jb-agiledev.com/privacy-policy"
            className="font-body text-xs hover:text-accent transition-colors"
            style={{ color: "#96876F" }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
