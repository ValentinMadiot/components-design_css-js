import { useState } from "react";
import "./style.css";

const AnimatedSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <form
        action="https://www.google.com/search"
        className={`search ${isOpen ? "show-search" : ""}`}
        id="search-bar">
        <input
          type="search"
          placeholder="Type something..."
          name="q"
          className="search__input"
        />

        <div
          className="search__button"
          id="search-button"
          onClick={toggleSearch}>
          <i
            className={`ri-search-2-line search__icon ${
              isOpen ? "hide" : ""
            }`}></i>
          <i
            className={`ri-close-line search__close ${
              isOpen ? "" : "hide"
            }`}></i>
        </div>
      </form>
    </div>
  );
};

export default AnimatedSearchBar;
