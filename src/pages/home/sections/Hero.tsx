import { useEffect, useState } from "react";

function Hero() {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    <div>
      <div className="c-hero-header position-absolute text-center top-50 left-50">
        <h1 className="display-1 fw-bold c-text-2">
          Portfolio
        </h1>
        <h5 className="display-5 c-text-2">
          by Iqbal
        </h5>
      </div>
      <div 
        className={`c-hero-banner ${isLandscape? "landscape" : "portrait"}`}
      />
      <div className="banner-bottom" />
    </div>
    </>
  )
  
}

  //   return (
  //   <>  
  //   <div className="c-hero-banner text-center">
  //     <div className="c-hero-parallax-container">
  //       <Parallax pages={isMobileView? 1.2:1.5}>
  //         <ParallaxLayer
  //           offset={0}
  //           speed={0}
  //         >
  //           <div
  //             className="position-absolute top-50 start-50 translate-middle c-text-light"
  //             style={{ zIndex: 10 }}
  //           >
  //             <h1 className="display-1 font-monospace fw-bold">Portfolio</h1>
  //             <h5 className="lead">by Ahmad Iqbal</h5>
  //           </div>
  //           <img 
  //             src={parallax.sky} 
  //             className="c-hero-img-sky"
  //           />
  //         </ParallaxLayer>
  //         <ParallaxLayer
  //           offset={0}
  //           speed={1}
  //         >
  //           <img
  //             src={parallax.mountain}
  //             className="c-hero-parallax-image img-fluid fixed-bottom"
  //             style={{transform: "translateY(10vh)"}}
  //           />
  //         </ParallaxLayer>
  //         <ParallaxLayer
  //           offset={0}
  //           speed={1.5}
  //         >
  //           <img
  //             src={parallax.trees}
  //             className="c-hero-parallax-image img-fluid fixed-bottom"
  //             style={{transform: "translateY(70vh)"}}
  //           />
  //         </ParallaxLayer>
  //         <ParallaxLayer
  //           offset={0}
  //           speed={3}
  //         >
  //           <img
  //             src={parallax.camp}
  //             className="c-hero-parallax-image img-fluid fixed-bottom"
  //             style={{transform: "translateY(50vh)"}}
  //           />
  //         </ParallaxLayer>
  //       </Parallax>
  //     </div>
  //     {/* {titles.map((title, index) => (
  //       <h1 key={index}>{title}</h1>
  //     ))} */}
  //   </div>
  //   </>
  // )

export default Hero;