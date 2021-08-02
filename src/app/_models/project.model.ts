import { Picture } from "./picture.model";

export interface Project{
  _id:string,
  language:string,
  creation_date:Date,
  name:string,
  title: string,
  content: string,
  pictures: Picture[],
  labels: string[],
  git_url: string,
  details: string,
  active:string,
  preview_url: string,
}
