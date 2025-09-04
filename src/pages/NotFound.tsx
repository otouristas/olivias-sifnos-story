import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl font-display font-bold text-villa-olive mb-6">404</div>
          <h1 className="text-2xl font-bold text-villa-olive mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-villa-olive text-white hover:bg-villa-olive-dark shadow-soft h-10 px-4 py-2"
            >
              Return to Home
            </a>
            <a 
              href="/villa" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-villa-olive transition-all duration-200 shadow-soft h-10 px-4 py-2"
            >
              Explore Villa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
