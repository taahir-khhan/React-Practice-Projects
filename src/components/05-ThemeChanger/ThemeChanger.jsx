import { useEffect, useState } from "react";
import { ThemeProvider } from "../../context/index";
import Card from "./Card";
import ThemeBtn from "./ThemeBtn";

function ThemeChanger() {
  const [themeMode, setThemeMode] = useState("light");

  const setDarkMode = () => {
    setThemeMode("dark");
  };

  const setLightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const htmlEle = document.querySelector("html");
    htmlEle.classList.remove("light", "dark");
    htmlEle.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, setDarkMode, setLightMode }}>
      <div className="flex flex-wrap h-70vh m-10 items-center">
        <div className="bg-white p-5 w-auto rounded-lg m-auto">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ThemeChanger;
