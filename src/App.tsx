import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Tools from './components/sections/Tools';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import Footer from './components/layout/Footer';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Tools />
        <Certificates />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;