import type { TypeAboutMe } from "../../../types/types";

function AboutMe({descriptions, picture}: TypeAboutMe) {
  return (
  <>
  <h1 className="text-center py-5">About Me</h1>
  <div className="row">
    <div className="col-12 col-md-6 col-lg-8 order-2 order-md-1 my-3 my-md-1">
      {descriptions.map((description, index) => (
        <div key={index}>
          <h5 key={index}>{description}</h5>
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