import { useEffect, useRef } from "react";
import "./loadingAnimationDots.css";

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

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="loading__container" id="design4">
      <h1 className="loading__title">
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
    </section>
  );
};

export default LoadingAnimationDots;
