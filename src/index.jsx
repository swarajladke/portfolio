import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import Lenis from "lenis";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900,
  once: true,
  offset: 80,
});

const RootWithLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // Lenis has no explicit destroy, but we can remove listeners
      lenis.stop();
    };
  }, []);

  return <App />;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RootWithLenis />);
