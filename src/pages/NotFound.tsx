import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SEO
        title="404 - Page Not Found | Fivsys"
        description="The page you are looking for could not be found. Return to Fivsys homepage for AI-powered development and marketing solutions."
        schemaType="WebPage"
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="text-center px-4">
          <p className="text-fivsys-red text-sm font-semibold uppercase tracking-widest mb-4">404 Error</p>
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6">404</h1>
          <p className="text-xl text-fivsys-silver mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-fivsys-red hover:bg-fivsys-darkRed text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
