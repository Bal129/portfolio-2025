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
    <div className="c-hero-header position-absolute text-center top-50 left-50">
      <h1 className="display-1 fw-bold c-text-2">
        Portfolio
      </h1>
      <h5 className="display-5 c-text-2">
        by Iqbal
      </h5>
    </div>
    <div
      className={`c-hero-banner ${isLandscape? "c-landscape" : "c-portrait"}`}
    />
    <div className="c-banner-bottom position-relative"
    >
      <h6 className="font-monospace text-center c-text-2">
        This website is still in development...
      </h6>
    </div>
    </>
  )
  
}

export default Hero;