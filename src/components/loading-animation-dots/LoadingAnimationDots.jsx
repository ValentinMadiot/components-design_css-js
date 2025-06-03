import { useEffect, useRef } from "react";
import "./LoadingAnimationDots.css";

const LoadingAnimationDots = () => {
  const dotsRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const dots = dotsRef.current;

    const addAnimate = () => {
      if (!dots) return;
      dots.classList.add("animate");

      timeoutRef.current = setTimeout(() => {
        dots.classList.remove("animate");

        timeoutRef.current = setTimeout(() => {
          addAnimate();
        }, 100);
      }, 2600);
    };

    addAnimate();

    // 🧹 Cleanup to avoid infinite loop on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <h1 className="loading">
      Loading
      <div className="loading__dots" ref={dotsRef}>
        <span className="loading__dot"></span>
        <span className="loading__dot"></span>
        <span className="loading__dot"></span>
        <span className="loading__dot">
          <span className="loading__dot-down"></span>
        </span>
      </div>
    </h1>
  );
};

export default LoadingAnimationDots;
