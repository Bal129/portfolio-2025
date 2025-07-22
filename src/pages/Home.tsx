import { useEffect, useState } from "react";

type AboutMe = {
  picture: string;
  descriptions: string[];
}

type Expertise = {
  title: string;
  description: string[];
}

type WorkExperience = {
  current: WorkExperienceDetail;
  previous: WorkExperienceDetail[];
}

type WorkExperienceDetail = {
  position: string;
  company: string;
  employment: string;
  date: string;
}

type Project = {
  header: string;
  samples: ProjectSample[];
}

type ProjectSample = {
  name: string;
  link: string;
  technicalDesc: string[];
  description: string;
  picture: string;
}

type Contact = {
  platform: ContactPlatform;
  username: string;
  link: string;
}

type ContactPlatform = {
  name: string;
  icon: string;
}

type Iotra = {
  icon: string;
  website: string;
}

type HomeData = {
  titles: string[];
  aboutMe: AboutMe;
  expertise: Expertise[];
  workExperience: WorkExperience;
  projects: Project[];
  contacts: Contact[];
  iotra: Iotra;
  landingImage: string;
}

function Home() {
  const [homeData, setHomeData] = useState<HomeData>();

  useEffect(() => {
    fetch("/data/contents.json")
      .then(response => response.json())
      .then(fetchedData => setHomeData(fetchedData));
  }, []);

  return (
    <div className="container">
      {/* Hero */}
      <div className="text-center p-5">
        {homeData && homeData.titles.map((title, index) => (
          <h1 key={index}>{title}</h1>
        ))}
      </div>

      {/* About me */}
      <div className="py-5" id="aboutme"></div>
      <h1 className="text-center py-5">About Me</h1>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8 order-2 order-md-1 my-3 my-md-1">
          {homeData && homeData.aboutMe.descriptions.map((description, index) => (
            <div key={index}>
              <h5 key={index}>{description}</h5>
              <br />
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2">
          <img src={homeData?.landingImage} className="img-fluid rounded-4"/>
        </div>
      </div>

      {/* Expertise */}
      <div className="py-5" id="expertise"></div>
      <h1 className="text-center py-5">Expertise</h1>
      {homeData && homeData.expertise.map((expert, index) => (
        <div key={index}>
          <h5>{expert.title}</h5>
          <div className="d-flex flex-wrap flex-row mb-3">
            {expert.description.map((item, row) => (
              <span key={row} className="small border rounded-4 py-2 px-4 text-light bg-dark">{item}</span>
            ))}
          </div>
        </div>
      ))}

      {/* Work experience */}
      <div className="py-5" id="experience"></div>
      <h1 className="text-center p-5">Work Experience</h1>
      <div className="row border rounded-2 text-dark bg-light p-3 m-1">
        <div className="col-3">
          <a href={homeData?.iotra.website} target="_blank" style={{textDecoration: "none"}}>
            <img src={homeData?.iotra.icon} className="rounded-3 img-fluid"/>
            <p className="text-center">{homeData?.workExperience.current.company}</p>
          </a>
        </div>
        <div className="col">
          <h4>
            <span className="badge text-light bg-dark my-2">
              {homeData?.workExperience.current.employment}
            </span>
            <br />
            {homeData?.workExperience.current.position}
          </h4>
          <p className="small">{homeData?.workExperience.current.date}</p>
        </div>
      </div>
      <br />
      <div className="m-1">
        {homeData?.workExperience?.previous?.map((work, index) => (
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

      {/* Projects */}
      <div className="py-5" id="projects"></div>
      <h1 className="text-center p-5">Projects</h1>
      <div className="row">
        {homeData && homeData.projects.map((project, index) => (
          project.samples.map((sample, row) => (
            <div key={`${index}-${row}`} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card m-2">
                <img 
                  src={sample.picture}
                  className="card-img-top img-fluid"
                />
                <div className="card-body p-4 bg-light">
                  <h5 className="card-title d-flex align-items-center gap-3">
                    {sample.name}
                    <span className="badge text-light bg-dark">{project.header}</span>
                    <a href={sample.link} target="_blank"  title={"Go to: " + sample.link}>
                      <img 
                        src="/img/icons/github.png" 
                        style={{width: '30px', height: '30px'}}
                      />
                    </a>
                  </h5>
                  <div className="d-flex flex-wrap flex-row mb-2">
                    {sample.technicalDesc.map((item, row) => (
                      <span 
                        key={row} 
                        className="small border rounded-4 px-3 py-1 text-light bg-dark"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="card-text">{sample.description}</p>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>

      {/* Contacts */}
      <div className="py-5" id="contacts"></div>
      <h1 className="text-center p-5">Contacts</h1>
      <div className="d-flex flex-wrap flex-row gap-3 justify-content-md-center">
        {homeData && homeData.contacts.map((contact, index) => (
          <div key={index} className="d-flex gap-3 m-3">
            <a href={contact.link} target="_blank" className="text-decoration-none">
              <img 
                src={contact.platform.icon}
                style={{width: "50px", height: "50px"}}
              />
            </a>
            <div>
              <h4>{contact.platform.name}</h4>
              <p>{contact.username}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="py-5"></div> {/* Spacer */}
    </div>
  )
}

export default Home;