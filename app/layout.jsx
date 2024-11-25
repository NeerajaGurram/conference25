'use client';
import { useEffect, useState } from "react";
import StartPage from "./components/startpage/page";
import Footer from './components/footer/page';
import Header from './components/header/page';
import "./globals.css";
export default function RootLayout({ children }) {
  const [showStartPage, setShowStartPage] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has already visited
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowStartPage(true); // Show StartPage if not visited
    }
  }, []);

  const handleLaunch = () => {
    setShowStartPage(false); 
    // Mark as visited in localStorage
    localStorage.setItem("hasVisited", "true");
  };

  return (
    <html lang="en">
      <meta name="google-site-verification" content="HZS-90V6zGclkAU55oLXVGKUJ4F5yVraTuWqhZES81A" />
      <body >
        {showStartPage ? (
          <StartPage onLaunch={handleLaunch} />
        ) : (
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
