import { useState } from "react";
import "./ColorGradientTool.css";

const generateRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

const ColorGradientTool = () => {
  const [colors, setColors] = useState(["#BA5370", "#F4E2D8"]);
  const [angle, setAngle] = useState(45);
  const [warning, setWarning] = useState("");

  const handleAngleChange = (e) => {
    setAngle(e.target.value * 3.6);
  };

  const updateColor = (index, value) => {
    const updatedColors = [...colors];
    updatedColors[index] = value.toUpperCase();
    setColors(updatedColors);
  };

  const addColor = () => {
    setWarning("");
    if (colors.length >= 9) return;
    setColors([...colors, generateRandomColor().toUpperCase()]);
  };

  const removeColor = () => {
    setWarning("");
    if (colors.length <= 2) {
      setWarning("Il faut au moins deux couleurs !");
      return;
    }
    setColors(colors.slice(0, -1));
  };

  const randomizeColors = () => {
    const randomized = colors.map(() => generateRandomColor().toUpperCase());
    setColors(randomized);
  };

  const backgroundStyle = {
    background: `linear-gradient(${angle}deg, ${colors.join(", ")})`,
  };

  return (
    <div className="gradient-tool" style={backgroundStyle}>
      <div className="gradient-inputs">
        {colors.map((color, index) => (
          <input
            key={index}
            type="text"
            maxLength="7"
            value={color}
            className="gradient-color-input"
            onChange={(e) => updateColor(index, e.target.value)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="gradient-range">
        <input type="range" className="inp-range" onInput={handleAngleChange} />
      </div>

      <div className="gradient-buttons">
        <button type="button" className="btn" onClick={addColor}>
          <img src="src/plus.svg" alt="ajouter" />
        </button>
        <button type="button" className="btn" onClick={removeColor}>
          <img src="src/minus.svg" alt="retirer" />
        </button>
        <button
          type="button"
          className="btn random-btn"
          onClick={randomizeColors}>
          Random
        </button>
      </div>

      {warning && <span className="gradient-warning">{warning}</span>}
    </div>
  );
};

export default ColorGradientTool;
