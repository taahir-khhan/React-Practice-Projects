import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    const container = document.querySelector(".container");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const color = window.getComputedStyle(e.target).backgroundColor;
        container.style.backgroundColor = color;
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="button_group">
        <button className="btn btn_red">Red</button>
        <button className="btn btn_green">Green</button>
        <button className="btn btn_blue">Blue</button>
        <button className="btn btn_pink">Pink</button>
        <button className="btn btn_yellow">Yellow</button>
        <button className="btn btn_orange">Orange</button>
        <button className="btn btn_white">White</button>
        <button className="btn btn_black">Black</button>
      </div>
    </div>
  );
}

export default App;
