import React, { useEffect } from "react";
import "./styles/App.scss";
import gsap from "gsap";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";

function App() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.to("body", { css: { visibility: "visible" } });

    //  Timeline
    const tl = gsap.timeline();
    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewX: 7,
      stagger: { amount: 0.4 },
    })
      .to(".overlay-top", 1.6, { height: 0, ease: "expo.inOut", stagger: 0.4 })
      .to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        stagger: 0.4,
        delay: -0.8,
      })
      .to(".intro-overlay", 0, { css: { display: "none" } })
      .from(".case img", 1.4, {
        scale: 1.4,
        delay: -2,
        ease: "expo.inOut",
        stagger: 0.4,
      });
  }, []);
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
