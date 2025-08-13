import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-crypto-text-muted mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
