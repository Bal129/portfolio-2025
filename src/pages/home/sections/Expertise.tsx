import type { TypeExpertise } from "../../../types/types";

type PropsExpertise = {
  expertise: TypeExpertise[]
}

function Expertise({expertise}: PropsExpertise) {
  return (
    <>
    <h5 className="font-monospace c-text-secondary text-center">Section 2</h5>
    <h1 className="display-1 fw-bold c-text-primary text-center pb-5">Expertise</h1>
    {expertise.map((row, index) => (
      <div key={index}>
        <h3 className="font-monospace c-text-2">{row.title}</h3>
        <div className="d-flex flex-wrap flex-row mb-3">
          {row.description.map((item, index2) => (
            <span 
              key={index2}
              className="font-monospace badge c-badge-color py-2 px-4 m-1">
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