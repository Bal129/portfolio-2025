import type { TypeWorkExperience } from "../../../types/types";

function Experience({current, previous}: TypeWorkExperience) {
  return (
    <>
    <h1 className="display-1 fw-bold c-text-primary text-center pb-5">Work Experience</h1>
    <div className="font-monospace row c-container-light rounded-4 p-3 m-1 shadow">
      <div className="col-3 c-container-light c-main-button rounded-3 m-2">
        <a 
          href={current.website} 
          target="_blank"
          style={{textDecoration: "none"}}
          className="d-flex flex-column justify-content-center align-items-center m-2"
        >
          <img 
            src={import.meta.env.BASE_URL + current.icon}
            className="border border-2 border-dark rounded-3 img-fluid"
          />
          <p className="c-text-1 text-center">{current.company}</p>
        </a>
      </div>
      <div className="col">
        <span className="c-badge-highlight-color fw-bold rounded-3 px-3 py-1 my-2">
          {current.employment}
        </span>
        <h4 className="c-text-1 fw-bold ">
          <br />
          {current.position}
        </h4>
        <p className="small c-text-1">{current.date}</p>
      </div>
    </div>
    <br />
    <div className="font-monospace c-text-2 m-1">
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