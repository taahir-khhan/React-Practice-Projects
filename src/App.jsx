import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  BackgroundChanger,
  CounterApp,
  CurrencyConvertor,
  Home,
  RandomPassword,
  ThemeChanger,
  Todo,
} from "./components/index.js";
import "./index.css";
import Layout from "./Layout.jsx";

// Create the router Method-2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="counter-app" element={<CounterApp />} />
      <Route path="background-changer" element={<BackgroundChanger />} />
      <Route path="random-password" element={<RandomPassword />} />
      <Route path="currency-convertor" element={<CurrencyConvertor />} />
      <Route path="theme-changer" element={<ThemeChanger />} />
      <Route path="todo-app" element={<Todo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
