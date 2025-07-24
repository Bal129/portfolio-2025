import type { TypeWorkExperience } from "../../../types/types";

function Experience({current, previous}: TypeWorkExperience) {
  return (
    <>
    <br />
    <h5 className="font-monospace text-center">Section 3</h5>
    <h1 className="display-1 fw-bold text-center pb-5">Work Experience</h1>
    <div className="font-monospace row border rounded-2 text-dark bg-light p-3 m-1">
      <div className="col-3">
        <a href={current.website} target="_blank" style={{textDecoration: "none"}}>
          <img 
            src={current.icon}
            className="border border-2 border-dark rounded-3 img-fluid"
          />
          <p className="text-center">{current.company}</p>
        </a>
      </div>
      <div className="col">
        <h4>
          <span className="badge text-light bg-dark my-2">
            {current.employment}
          </span>
          <br />
          {current.position}
        </h4>
        <p className="small">{current.date}</p>
      </div>
    </div>
    <br />
    <div className="font-monospace text-light m-1">
      {previous?.map((work, index) => (
        <div key={index} className="row m-3">
          <div className="col-3 col-md-2 text-muted small">
            {work.date}
          </div>
          <div className="col">
            <h6 className="mb-1">
              {work.position}
              <span className="badge text-light bg-dark mx-2">
                {work.employment}
              </span>
            </h6>
            <p className="mb-0">{work.company}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Experience;