import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-gray-800 shadow-lg border-b-2 border-white'>
      <nav className='container mx-auto p-4'>
        <ul className='flex flex-wrap justify-center gap-4 text-lg font-medium'>
          {[
            { path: "/", label: "Home" },
            { path: "/counter-app", label: "Counter App" },
            { path: "/background-changer", label: "Background Changer" },
            { path: "/random-password", label: "Random Password Generator" },
            { path: "/currency-convertor", label: "Currency Converter" },
            { path: "/theme-changer", label: "Theme Changer" },
            { path: "/todo-app", label: "Todo App" },
            { path: "/accordion", label: "Accordion" },
            { path: "/color-generator", label: "RGB & Hex Color Generator" },
            { path: "/star-rating", label: "Star Rating" },
            { path: "/image-slider", label: "Image Slider" },
            { path: "/load-more", label: "Load More" },
            { path: "/tree-view", label: "Tree View" },
            { path: "/qr-code-generator", label: "QR Code Generator" },
            { path: "/progress-bar", label: "Progress Bar" },
            { path: "/custom-tabs", label: "Custom Tabs" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
