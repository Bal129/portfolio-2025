import { useRef } from "react";
import type { TypeHero } from "../../../types/types";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Hero({parallax, titles}: TypeHero) {
  const isMobileView = useRef(window.innerWidth < 768);
  
  return (
    <>  
    <div className="c-hero-banner text-center">
      <div className="c-hero-parallax-container">
        <Parallax pages={isMobileView? 1.2:2}>
          <ParallaxLayer
            offset={0}
            speed={0.3}
            className="my-5"
          >
            <div
              className="position-absolute top-50 start-50 translate-middle c-text-light"
              style={{ zIndex: 10 }}
            >
              <h1 className="display-1 font-monospace fw-bold">Portfolio</h1>
              <h5 className="lead">by Ahmad Iqbal</h5>
            </div>
            <img 
              src={parallax.sky} 
              className="c-hero-parallax-image img-fluid rounded-4"
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1}
          >
            <img
              src={parallax.mountain}
              className="c-hero-parallax-image img-fluid rounded-4"
              style={{transform: "translateY(60vh)"}}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={1.5}
          >
            <img
              src={parallax.camp}
              className="c-hero-parallax-image img-fluid rounded-4"
              style={{transform: "translateY(70vh)"}}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
      {/* {titles.map((title, index) => (
        <h1 key={index}>{title}</h1>
      ))} */}
    </div>
    </>
  )
}

export default Hero;