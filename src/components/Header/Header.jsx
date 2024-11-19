import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav__bar">
        <ul className="nav__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/counter-app"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Counter App
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/background-changer"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Background Changer
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/random-password"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Random Password Generator
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/currency-convertor"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Currency Covertor
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/theme-changer"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Theme Changer
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/todo-app"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Todo App
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/accordion"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Accordion
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/color-generator"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Rgb & Hex Color Generator
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/star-rating"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Star Rating
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/image-slider"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Image Slider
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/load-more"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Load More
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tree-view"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Tree View
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/qr-code-generator"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              QR Code Generator
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/progress-bar"
              className={({ isActive }) =>
                ` ${isActive ? "text-indigo-700" : "text-black"} nav__item`
              }
            >
              Progress Bar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
