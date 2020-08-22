import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", { css: { visibility: "visible" } });
  });
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
