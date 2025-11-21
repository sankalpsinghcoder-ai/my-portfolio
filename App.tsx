import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  // Simple loading state for initial reveal
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-brand-gray border-t-brand-yellow rounded-full animate-spin mb-4"></div>
          <div className="text-brand-yellow font-mono text-sm animate-pulse tracking-widest">LOADING</div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;