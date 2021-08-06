export interface Translation {
  navbar: { projects: string, about: string, contact: string },
  home: {
    greet: string,
    presentation: string,
    subtitle: string,
    description: string
  },
  about: {
    title: string,
    subtitle:string,
    description: string,
    education: string,
    educationDescription: string,
    skills: string,
    feature: string
  },
  work: {
    title: string,
    description:string,
    error: string,
    filters: string,
    sort: string,
    new_asc:string,
    name_asc: string,
    name_desc: string
  },
  contact: {
    title: string,
    subtitle: string,
    description: string
  },
  actions: {
    about: string,
    work: string,
    contact: string,
    resume: string,
    readmore: string,
    view: string,
    return: string,
    all: string
  }
}
