import { useState } from "react";

export const BackgroundColor = () => {
  let color = [
    "#FFBF00",
    "#FF7F50",
    "#DFFF00",
    "#DE3163",
    "#00FF00",
    "#000080",
  ];
  const ramdomColor = color.map((item) => item);

  const [colorBackground, setcolorBackground] = useState(color[0]);

  const position = () => {
    setcolorBackground(Math.floor(Math.random(ramdomColor) * 7));
  };

  document.body.style.background = color[colorBackground];

  return (
    <>
      <h1>Background Color</h1>
      <hr />

      <button onClick={position}>Cambiame de Color</button>
    </>
  );
};
