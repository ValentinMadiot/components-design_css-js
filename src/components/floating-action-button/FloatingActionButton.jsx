import { useState } from "react";
import "./floatingActionButton.css";

const FloatingActionButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((prev) => !prev);

  return (
    <section className="floating__section">
      <div className="floating__container">
        {/* Toggle Button */}
        <div
          className={`floating__toggle ${isActive ? "active" : ""}`}
          onClick={toggleMenu}>
          <i className="ri-add-line"></i>
        </div>

        {/* Floating Menu */}
        <ul className={`floating__menu ${isActive ? "active" : ""}`}>
          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Pencil clicked")}
              aria-label="Edit">
              <div className="floating__icon">
                <i className="ri-pencil-fill"></i>
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Image clicked")}
              aria-label="Insert image">
              <div className="floating__icon">
                <i className="ri-image-fill"></i>
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Mic clicked")}
              aria-label="Record voice">
              <div className="floating__icon">
                <i className="ri-mic-fill"></i>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FloatingActionButton;
