import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import { Route } from "react-router-dom";
import Header from "./components/header";
// Components
import About from "./pages/about";
import Approch from "./pages/approach";
import Services from "./pages/services";
import CaseStudies from "./pages/caseStudies";
import Home from "./pages/home";
import Navigation from "./components/navigation";

// Routes
const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    Component: CaseStudies,
  },
  {
    path: "/approach",
    name: "Approach",
    Component: Approch,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
  {
    path: "/about",
    name: "About us",
    Component: About,
  },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", { css: { visibility: "visible" } });

    const debouncedResizeHandler = debounce(function () {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedResizeHandler);
    return () => {
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  });
  return (
    <>
      <Header />
      <div className="App">
        {console.log(dimension)}
        {routes.map(({ path, Component }) => (
          <Route key={path} exact component={Component} path={path} />
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
