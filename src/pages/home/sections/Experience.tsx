import type { TypeWorkExperience } from "../../../types/types";

function Experience({current, previous}: TypeWorkExperience) {
  return (
    <>
    <br />
    <h5 className="font-monospace c-text-secondary text-center">Section 3</h5>
    <h1 className="display-1 fw-bold c-text-primary text-center pb-5">Work Experience</h1>
    <div className="font-monospace row c-container-light rounded-4 p-3 m-1">
      <div className="col-3 c-container-light c-main-button rounded-3">
        <a href={current.website} target="_blank" style={{textDecoration: "none"}}>
          <img 
            src={current.icon}
            className="border border-2 border-dark rounded-3 img-fluid"
          />
          <p className="c-text-dark text-center">{current.company}</p>
        </a>
      </div>
      <div className="col">
        <span className="c-badge-highlight-color rounded-3 px-3 py-1 my-2">
          {current.employment}
        </span>
        <h4 className="c-text-dark fw-bold ">
          <br />
          {current.position}
        </h4>
        <p className="small c-text-dark">{current.date}</p>
      </div>
    </div>
    <br />
    <div className="font-monospace c-text-light m-1">
      {previous?.map((work, index) => (
        <div key={index} className="row m-3">
          <div className="col-3 col-md-2 small">
            {work.date}
          </div>
          <div className="col">
            <h6 className="mb-1">
              <b>{work.position}</b>
              <span className="badge c-badge-color small px-2 mx-3">
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