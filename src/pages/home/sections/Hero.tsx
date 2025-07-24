import type { TypeHero } from "../../../types/types";

function Hero({titles}: TypeHero) {
  return (
    <>
    <div className="c-hero-banner text-center">
      {titles.map((title, index) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
    </>
  )
}

export default Hero;