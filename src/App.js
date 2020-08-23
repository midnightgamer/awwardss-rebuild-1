import React, { useEffect } from "react";
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
function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact component={Component} path={path} />
        ))}
      </div>
    </>
  );
}

export default App;
