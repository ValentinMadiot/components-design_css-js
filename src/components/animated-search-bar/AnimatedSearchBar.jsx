import { useState } from "react";
import "./animatedSearchBar.css";

const AnimatedSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="search__container">
      <form
        action="https://www.google.com/search"
        className={`search__form ${isOpen ? "show-search" : ""}`}>
        <input
          type="search"
          placeholder="Tapez quelque chose..."
          name="q"
          className="search__input"
        />

        <div className="search__button" onClick={toggleSearch}>
          <i
            className={`ri-search-2-line search__icon ${isOpen ? "hide" : ""}`}
          />
          <i
            className={`ri-close-line search__close ${isOpen ? "" : "hide"}`}
          />
        </div>
      </form>
    </section>
  );
};

export default AnimatedSearchBar;
