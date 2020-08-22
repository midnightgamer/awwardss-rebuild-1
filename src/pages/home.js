import React, { useEffect, useState } from "react";
import gsap from "gsap";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";

const tl = gsap.timeline();
const HomeAnimation = (completeAnimation) => {
  return tl
    .from(".line span", 1.8, {
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
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
const Home = (props) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    HomeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete ? "" : <IntroOverlay />}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
