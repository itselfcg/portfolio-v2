import { Picture } from "./picture.model";

export interface Project{
  id:string,
  language:string,
  name:string,
  title: string,
  content: string,
  picture: Picture,
  labels: string[],
  git_url: string,
  details_url: string,
  preview_url: string,
}
