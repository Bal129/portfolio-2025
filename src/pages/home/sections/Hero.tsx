import type { TypeHero } from "../../../types/types";

function Hero({titles}: TypeHero) {
  return (
    <>
    <div className="text-center p-5">
      {titles.map((title, index) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
    </>
  )
}

export default Hero;