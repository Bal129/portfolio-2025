import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TypeProject } from "../../../types/types";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

type PropsProject = {
  projects: TypeProject[];
}

function Project({projects}: PropsProject) {
  return (
    <>
    <h1 className="display-1 fw-bold c-text-primary text-center pb-5">My Past Projects</h1>
    <div className="row">
      {projects.map((project, index) => (
        project.samples.map((sample, row) => (
          <div key={`${index}-${row}`} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="font-monospace card m-2 shadow">
              <div className="c-project-img">
                <img 
                  src={import.meta.env.BASE_URL + sample.picture}
                  className="card-img-top img-fluid"
                />
              </div>
              <div className="card-body p-4 c-container-light">
                <h5 className="card-title c-text-1 d-flex align-items-center gap-3">
                  {sample.name}
                  <span className="badge c-badge-highlight-color">{project.header}</span>
                  {sample.link && (
                    <a href={sample.link} target="_blank"  title={"Go to: " + sample.link}>
                      <img 
                        src={import.meta.env.BASE_URL + "img/icons/github.png"} 
                        style={{width: '30px', height: '30px'}}
                        className="c-container-light c-main-button rounded-pill"
                      />
                    </a>
                  )}
                  {sample.page && (
                    <div className="c-container-light c-main-button rounded-2 px-1">
                      <a href={sample.page} target="_blank"  title={"Go to: " + sample.page}>
                        <FontAwesomeIcon
                          icon={faWindowMaximize}
                          className="c-text-1"
                          style={{width: '30px', height: '30px'}}
                        />
                      </a>
                    </div>
                  )}
                </h5>
                <div className="d-flex flex-wrap flex-row mb-2">
                  {sample.technicalDesc.map((item, row) => (
                    <span 
                      key={row} 
                      className="badge c-badge-color px-2 py-1 m-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="c-text-1 card-text">{sample.description}</p>
              </div>
            </div>
          </div>
        ))
      ))}
    </div>
    </>
  )
}

export default Project;