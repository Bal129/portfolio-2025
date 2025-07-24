import type { TypeExpertise } from "../../../types/types";

type PropsExpertise = {
  expertise: TypeExpertise[]
}

function Expertise({expertise}: PropsExpertise) {
  return (
    <>
    <h5 className="font-monospace text-center">Section 2</h5>
    <h1 className="display-1 fw-bold text-center pb-5">Expertise</h1>
    {expertise.map((row, index) => (
      <div key={index}>
        <h3 className="font-monospace text-light">{row.title}</h3>
        <div className="d-flex flex-wrap flex-row mb-3">
          {row.description.map((item, index2) => (
            <span 
              key={index2}
              className="font-monospace border rounded-4 py-2 px-4 m-1 text-light bg-dark">
                {item}
            </span>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}

export default Expertise;