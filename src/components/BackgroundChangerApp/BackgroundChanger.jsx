import { useEffect } from "react";

function BackgroundChanger() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".background-changer__btn");
    const container = document.querySelector("body");

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
    <div className="background-changer">
      <div className="background-changer__buttons">
        <button className="background-changer__btn background-changer__btn-red">
          Red
        </button>
        <button className="background-changer__btn background-changer__btn-green">
          Green
        </button>
        <button className="background-changer__btn background-changer__btn-blue">
          Blue
        </button>
        <button className="background-changer__btn background-changer__btn-pink">
          Pink
        </button>
        <button className="background-changer__btn background-changer__btn-yellow">
          Yellow
        </button>
        <button className="background-changer__btn background-changer__btn-orange">
          Orange
        </button>
        <button className="background-changer__btn background-changer__btn-white">
          White
        </button>
        <button className="background-changer__btn background-changer__btn-black">
          Black
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
