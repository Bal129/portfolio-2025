import type { TypeAboutMe } from "../../../types/types";

function AboutMe({descriptions, picture}: TypeAboutMe) {
  return (
  <>
  <h5 className="font-monospace c-text-secondary text-center">Section 1</h5>
  <h1 className="display-1 fw-bold c-text-primary text-center pb-5">About Me</h1>
  <div className="row">
    <div className="col-12 col-md-6 col-lg-8 order-2 order-md-1 my-3 my-md-1">
      {descriptions.map((description, index) => (
        <div key={index}>
          <h5 className="font-monospace c-text-light">{description}</h5>
          <br />
        </div>
      ))}
    </div>
    <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2">
      <img src={picture} className="img-fluid rounded-4"/>
    </div>
  </div>
  </>
  )
}

export default AboutMe;