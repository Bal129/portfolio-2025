export type TypeNavbarData = {
  sections: TypeNavbarSection[];
}

export type TypeNavbarSection = {
  name: string;
  href: string;
}

export type TypeHomeData = {
  hero :TypeHero;
  aboutMe: TypeAboutMe;
  expertise: TypeExpertise[];
  workExperience: TypeWorkExperience;
  projects: TypeProject[];
  contacts: TypeContact[];
}

export type TypeHero = {
  titles: string[];
}

export type TypeAboutMe = {
  picture: string;
  descriptions: string[];
}

export type TypeExpertise = {
  title: string;
  description: string[];
}

export type TypeWorkExperience = {
  current: TypeWorkExperienceDetail;
  previous: TypeWorkExperienceDetail[];
}

export type TypeWorkExperienceDetail = {
  position: string;
  company: string;
  employment: string;
  date: string;
  icon: string;
  website: string;
}

export type TypeProject = {
  header: string;
  samples: TypeProjectSample[];
}

export type TypeProjectSample = {
  name: string;
  link: string;
  technicalDesc: string[];
  description: string;
  picture: string;
}

export type TypeContact = {
  platform: TypeContactPlatform;
  username: string;
  link: string;
}

export type TypeContactPlatform = {
  name: string;
  icon: string;
}