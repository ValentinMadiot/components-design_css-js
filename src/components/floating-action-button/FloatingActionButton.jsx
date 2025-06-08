import { useState } from "react";
import "./floatingActionButton.css";

const FloatingActionButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <div className="floating">
      <div className="floating__container">
        <div
          className={`floating__toggle ${isActive ? "active" : ""}`}
          onClick={toggleMenu}>
          <i className="ri-add-line"></i>
        </div>

        <ul className={`floating__menu ${isActive ? "active" : ""}`}>
          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Pencil clicked")}>
              <div className="floating__icon">
                <i className="ri-pencil-fill"></i>
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Image clicked")}>
              <div className="floating__icon">
                <i className="ri-image-fill"></i>
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="floating__link"
              onClick={() => console.log("Mic clicked")}>
              <div className="floating__icon">
                <i className="ri-mic-fill"></i>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingActionButton;
