import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    setTotalImages(totalImages);

    for (var i = 1; i <= totalImages; i++) {
      var image = document.createElement("img");
      image.setAttribute("src", require("./images/" + i + ".jpg"));
      image.setAttribute("height", "380px");
      image.setAttribute("width", "420px");
      document.querySelector(".gallery").appendChild(image);
    }
  });

  const onClickListener = arg => {
    setTotalImages(arg);

    for (var i = 1; i <= arg; i++) {
      var image = document.createElement("img");
      image.setAttribute("src", require("./images/" + i + ".jpg"));
      image.setAttribute("height", "380px");
      image.setAttribute("width", "420px");
      document.querySelector(".gallery").appendChild(image);
    }
  };

  return (
    <main className="main">
      <div className="info">
        <h1>Performance Test SPA</h1>
        <p>
          Denna projekt kommer användas för att mäta prestandan hos SPA vid hantering av bilder
        </p>

        <div className="pfbuttons">
          <div>
            <button className="btnChange" onClick={() => onClickListener(10)}>
              10 Bilder
            </button>
            <button className="btnChange" onClick={() => onClickListener(50)}>
              50 Bilder
            </button>

            <button className="btnChange" onClick={() => onClickListener(100)}>
              100 Bilder
            </button>
          </div>

          <div>
            <button className="btnChange" onClick={() => onClickListener(500)}>
              500 Bilder
            </button>
            <button className="btnChange" onClick={() => onClickListener(1000)}>
              1000 Bilder
            </button>
          </div>
        </div>
      </div>

      <h3>{totalImages} Bilder visas just nu!</h3>
      <div className="gallery"></div>
    </main>
  );
}

export default App;
