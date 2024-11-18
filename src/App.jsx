import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  HashRouter as Router,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import menus from "./components/12-Tree-View/data.js";
import {
  Accordion,
  BackgroundChanger,
  CounterApp,
  CurrencyConvertor,
  Home,
  ImageSlider,
  LoadMore,
  RandomColor,
  RandomPassword,
  Revision,
  StarRating,
  ThemeChanger,
  Todo,
  TreeView,
} from "./components/index.js";
import "./index.css";
import Layout from "./Layout.jsx";

// Create the router Method-2 dist folder is added
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
      <Route path="accordion" element={<Accordion />} />
      <Route path="color-generator" element={<RandomColor />} />
      <Route path="star-rating" element={<StarRating />} />
      <Route
        path="image-slider"
        element={
          <ImageSlider
            url="https://picsum.photos/v2/list"
            pages={1}
            limit={10}
          />
        }
      />
      <Route path="load-more" element={<LoadMore />} />
      <Route path="tree-view" element={<TreeView menus={menus} />} />
      <Route path="revision" element={<Revision />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
