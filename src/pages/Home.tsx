import { useEffect, useState } from "react";

type AboutMe = {
  picture: string;
  descriptions: string[];
}

type Expertise = {
  title: string;
  description: string;
}

type WorkExperience = {
  position: string;
  company: string;
  employment: string;
}

type Project = {
  header: string;
  samples: ProjectSample[];
}

type ProjectSample = {
  name: string;
  link: string;
  technicalDesc: string;
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

type HomeData = {
  titles: string[];
  aboutMe: AboutMe;
  expertise: Expertise[];
  workExperience: WorkExperience[];
  projects: Project[];
  contacts: Contact[];
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
      <h2 className="text-center py-5">About Me</h2>
      <div>
        {homeData && homeData.aboutMe.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>

      {/* Expertise */}
      <div className="py-5" id="expertise"></div>
      <h2 className="text-center py-5">Expertise</h2>
      <div>
        {homeData && homeData.expertise.map((expert, index) => (
          <div key={index}>
            <h4>{expert.title}</h4>
            <p>{expert.description}</p>
          </div>
        ))}
      </div>

      {/* Work experience */}
      <div className="py-5" id="experience"></div>
      <h2 className="text-center p-5">Work Experience</h2>
      <div>
        {homeData && homeData.workExperience.map((work, index) => (
          <div key={index}>
            <h4>{work.position}</h4>
            <p>{work.company} | {work.employment}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="py-5" id="projects"></div>
      <h2 className="text-center p-5">Projects</h2>
      <div>
        {homeData && homeData.projects.map((project, index) => (
          <div key={index}>
            <h4 className="pb-3">{project.header}</h4>
            {project.samples.map((sample, row) => (
              <div key={row} className="pb-5">
                <h6>{sample.name}</h6>
                <p>{sample.description}</p>
                <img 
                  src={sample.picture}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="py-5" id="contacts"></div>
      <h2 className="text-center p-5">Contacts</h2>
      <div>
        {homeData && homeData.contacts.map((contact, index) => (
          <div key={index}>
            <h4>{contact.platform.name}</h4>
            <p>
              <a href={contact.link} target="_blank" className="text-decoration-none">
                {contact.username}
              </a>
            </p>
          </div>
        ))}
      </div>
      
      <div className="py-5"></div> {/* Spacer */}
    </div>
  )
}

export default Home;