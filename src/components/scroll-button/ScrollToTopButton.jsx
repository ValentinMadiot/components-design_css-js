import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollToTopButton.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const section = document.getElementById("profil");
      if (section) {
        const sectionTop = section.offsetTop;
        setShowButton(scrollY >= sectionTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <button
      className={`scroll-top ${showButton ? "show" : "hide"}`}
      onClick={scrollToTop}
      aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
