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
  screenshots: ProjectScreenshot[];
}

type ProjectScreenshot = {
  picture: string;
  description: string;
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
      <h2 className="text-center py-5">About Me</h2>
      <div>
        {homeData && homeData.aboutMe.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>

      {/* Expertise */}
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
      <h2 className="text-center p-5">Projects</h2>
      <div>
        {/* {homeData?.projects?.map((project, index) => (
          <div key={index}>
            <h4>{project.header}</h4>
            <p>{project.samples[0].name}</p>
          </div>
        ))} */}
      </div>

      {/* Contacts */}
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