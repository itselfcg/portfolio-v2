import { Section } from "./section.model";
import { Insight } from "./insight.model";
import { Picture } from "./picture.model";
import { User } from "./user.model";

export interface CaseStudy {
  id:string,
  name: string,
  title: string,
  rol: string,
  duration: string,
  summary: string,
  sections:Section[],
  users: User[],
  insights: Insight[],
  pictures: Picture[]
}
