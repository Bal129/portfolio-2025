import type { TypeExpertise } from "../../../types/types";

type PropsExpertise = {
  expertise: TypeExpertise[]
}

function Expertise({expertise}: PropsExpertise) {
  return (
    <>
    <h1 className="text-center py-5">Expertise</h1>
    {expertise.map((row, index) => (
      <div key={index}>
        <h5>{row.title}</h5>
        <div className="d-flex flex-wrap flex-row mb-3">
          {row.description.map((item, index2) => (
            <span key={index2} className="small border rounded-4 py-2 px-4 text-light bg-dark">{item}</span>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}

export default Expertise;