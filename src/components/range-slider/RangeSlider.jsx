import { useEffect, useRef, useState } from "react";
import "./RangeSlider.css";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const thumbRef = useRef(null);
  const lineRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const thumb = thumbRef.current;
    const line = lineRef.current;

    const thumbPosition = value / input.max;
    const space = input.offsetWidth - thumb.offsetWidth;

    thumb.style.left = `${thumbPosition * space}px`;
    line.style.width = `${value}%`;
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="range-slider-container">
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
