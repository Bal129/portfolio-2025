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
      <h1 className="display-1 fw-bold text-light">
        Portfolio
      </h1>
      <h5 className="display-5 text-light">
        by Iqbal
      </h5>
    </div>
    <div
      className="c-hero-banner"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/landing-pic/${
          isLandscape ? "nightsky-h.png" : "nightsky-v.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    />
    <h6 className="font-monospace text-center c-text-2 py-2">
      This website is still in development...
    </h6>
    </>
  )
  
}

export default Hero;