import { Picture } from "./picture.model";

export interface Section {
  id:string,
  name: string,
  description: string,
  pictures: Picture[]

}
