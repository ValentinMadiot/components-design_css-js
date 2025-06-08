import { useEffect, useRef, useState } from "react";
import "./rangeSlider.css";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const thumbRef = useRef(null);
  const lineRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const thumb = thumbRef.current;
    const line = lineRef.current;

    if (!input || !thumb || !line) return;

    const max = Number(input.max);
    const percent = value / max;

    const space = input.offsetWidth - thumb.offsetWidth;
    const position = percent * space;

    thumb.style.left = `${position}px`;
    line.style.width = `${percent * 100}%`;
  }, [value]);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="range__container">
      <div className="range">
        <div className="range__content">
          <div className="range__slider">
            <div className="range__slider-line" ref={lineRef}></div>
          </div>

          <div className="range__thumb" ref={thumbRef}>
            <div className="range__value">
              <span className="range__value-number">{value}</span>
            </div>
          </div>

          <input
            type="range"
            className="range__input"
            min="0"
            max="100"
            value={value}
            step="1"
            ref={inputRef}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
