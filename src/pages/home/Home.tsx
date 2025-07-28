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
    fetch(import.meta.env.BASE_URL + "data/contents.json")
      .then(response => response.json())
      .then(fetchedData => setHomeData(fetchedData));
  }, []);

  return (
    <>
    {
      /* Section 1: Landing Page */
      homeData?.hero &&
      <Hero 
      />
    }
      
    <div className="py-5" /> {/* Spacer */}
    <div className="container py-5" id="aboutme">
      {
        /* Section 2: About Me */
        homeData?.aboutMe &&
        <AboutMe
          descriptions={homeData.aboutMe.descriptions}
          picture={homeData.aboutMe.picture}
        />
      }
    </div>

    <div className="py-5" /> {/* Spacer */}
    <div className="container py-5" id="expertise">
      {
        /* Section 3: Expertise */
        homeData?.expertise &&
        <Expertise
          expertise={homeData.expertise}
        />
      }
    </div>

    <div className="py-5" /> {/* Spacer */}
    <div className="container py-5" id="experience">
      {
        /* Section 4: Work Experience */
        homeData?.workExperience &&
        <Experience
          current={homeData.workExperience.current}
          previous={homeData.workExperience.previous}
        />
      }
    </div>
    
    <div className="py-5" /> {/* Spacer */}
    <div className="py-5 m-4" id="projects">
      {
        /* Projects */
        homeData?.projects &&
        <Project
          projects={homeData.projects}
        />
      }
    </div>

    <div className="py-5" /> {/* Spacer */}
    <div className="container">
      <div className="py-5" id="contacts">
        {
          /* Contacts */
          homeData?.contacts &&
          <Contact
            contacts={homeData.contacts}
          />
        }
      </div>
    </div>

    <div className="py-5" /> {/* Spacer */}
    </>
  )
}

  // return (
  //   <>
  //   {
  //     /* Section 1: Landing Page */
  //     homeData?.hero &&
  //     <Hero 
  //     />
  //   }

  //   <div className="container">
  //     <div className="py-5" id="aboutme">
  //       {
  //         /* Section 2: About Me */
  //         homeData?.aboutMe &&
  //         <AboutMe
  //           descriptions={homeData.aboutMe.descriptions}
  //           picture={homeData.aboutMe.picture}
  //         />
  //       }
  //     </div>
  //     <div className="row">
  //       <div className="col-md-12 col-lg-6 py-5" id="expertise">
  //         {
  //           /* Section 3: Expertise */
  //           homeData?.expertise &&
  //           <Expertise
  //             expertise={homeData.expertise}
  //           />
  //         }
  //       </div>
  //       <div className="col-md-12 col-lg-6 py-5" id="experience">
  //         {
  //           /* Section 4: Work Experience */
  //           homeData?.workExperience &&
  //           <Experience
  //             current={homeData.workExperience.current}
  //             previous={homeData.workExperience.previous}
  //           />
  //         }
  //       </div>
  //     </div>
  //     <div className="py-5" id="projects"></div>
  //     {
  //       /* Projects */
  //       homeData?.projects &&
  //       <Project
  //         projects={homeData.projects}
  //       />
  //     }
  //     <div className="py-5" id="contacts"></div>
  //     {
  //       /* Contacts */
  //       homeData?.contacts &&
  //       <Contact
  //         contacts={homeData.contacts}
  //       />
  //     }
  //     <div className="py-5"></div> {/* Spacer */}
  //   </div>
  //   </>
  // )

export default Home;