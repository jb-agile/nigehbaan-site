import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen flex flex-col bg-[#171009] text-[#F5EFE8]">
    <Navbar />
    <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-16 text-center">
      <div>
        <p className="font-heading text-6xl font-extrabold text-[#E8996A] mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold mb-3">Page not found</h1>
        <p className="font-body text-base text-[#C3B3A4] mb-8">
          The page you asked for does not exist on this site.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-accent-hover text-primary-foreground font-body text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          Back to Nigehbaan Systems
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
