import { useEffect, useState } from "react";
import type { TypeHomeData } from "../../types/types";
import AboutMe from "./sections/AboutMe";
import Expertise from "./sections/Expertise";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";

function Home() {
  const [homeData, setHomeData] = useState<TypeHomeData>();

  useEffect(() => {
    fetch("/data/contents.json")
      .then(response => response.json())
      .then(fetchedData => setHomeData(fetchedData));
  }, []);

  return (
    <>
    {
      /* Section 1: Landing Page */
      homeData?.hero &&
      <Hero 
        titles={homeData.hero.titles}
      />
    }
    <div className="container">


      <div className="py-5" id="aboutme"></div>
      {
        /* Section 2: About Me */
        homeData?.aboutMe &&
        <AboutMe
          descriptions={homeData.aboutMe.descriptions}
          picture={homeData.aboutMe.picture}
        />
      }

      <div className="py-5" id="expertise"></div>
      {
        /* Section 3: Expertise */
        homeData?.expertise &&
        <Expertise
          expertise={homeData.expertise}
        />
      }

      <div className="py-5" id="experience"></div>
      {
        /* Section 4: Work Experience */
        homeData?.workExperience &&
        <Experience 
          current={homeData.workExperience.current}
          previous={homeData.workExperience.previous}
        />
      }

      <div className="py-5" id="projects"></div>
      {
        /* Projects */
        homeData?.projects &&
        <Project 
          projects={homeData.projects}
        />
      }

      <div className="py-5" id="contacts"></div>
      {
        /* Contacts */
        homeData?.contacts &&
        <Contact
          contacts={homeData.contacts}
        />
      }
      
      <div className="py-5"></div> {/* Spacer */}
    </div>
    </>
  )
}

export default Home;