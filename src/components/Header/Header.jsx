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
        </ul>
      </nav>
    </header>
  );
}
