import { Insight } from "./insight.model";
import { Picture } from "./picture.model";
import { User } from "./user.model";

export interface CaseStudy {
  id:string,
  name: string,
  title: string,
  rol: string,
  duration: string,
  description: string,
  vision: string,
  challenge: string,
  introduction: string,
  users: User[],
  insights: Insight[],
  pictures: Picture[]
}
