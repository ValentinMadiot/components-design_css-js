import { useState } from "react";
import "./AnimatedSearchBar.css";

const AnimatedSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <form
      action="https://www.google.com/search"
      className={`search ${isOpen ? "show-search" : ""}`}>
      <input
        type="search"
        placeholder="Type something..."
        name="q"
        className="search__input"
      />

      <div className="search__button" onClick={toggleSearch}>
        <i
          className={`ri-search-2-line search__icon ${isOpen ? "hide" : ""}`}
        />
        <i className={`ri-close-line search__close ${isOpen ? "" : "hide"}`} />
      </div>
    </form>
  );
};

export default AnimatedSearchBar;
