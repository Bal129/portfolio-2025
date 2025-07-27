import type { TypeAboutMe } from "../../../types/types";

function AboutMe({descriptions}: TypeAboutMe) {
  return (
  <>
  <div 
    className="row"
    style={{ 
      minHeight: "300px", 
    }}
  >
    <div 
      className="col-md-6 col-lg-8"
      style={{ 
        zIndex: "10",
      }}
    >
      { descriptions.map((description, index) => (
        <div key={index}>
          { index === 0
            ? <h1 className="display-3 fw-bold c-text-primary text-start" >{description}</h1>
            : <h3 className="font-monospace c-text-shadow c-text-secondary">{description}</h3>
          }
          <br />
        </div>
      ))}
    </div>

    <div 
      className="col-md-6 col-lg-4 c-about-me-img shadow"
    />
  </div>
  </>
  )
}


  // return (
  // <>
  // <h5 className="font-monospace c-text-secondary text-center">Section 1</h5>
  // <h1 className="display-1 fw-bold c-text-primary text-center pb-5">About Me</h1>
  // <div className="row">
  //   <div className="col-12 col-md-6 col-lg-8 order-2 order-md-1 my-3 my-md-1">
  //     {descriptions.map((description, index) => (
  //       <div key={index}>
  //         <h5 className="font-monospace c-text-2">{description}</h5>
  //         <br />
  //       </div>
  //     ))}
  //   </div>
  //   <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2">
  //     <img src={picture} className="img-fluid rounded-4 shadow" />
  //   </div>
  // </div>
  // </>
  // )

export default AboutMe;