import { Picture } from './picture.model'

export interface User {
  id:string,
  name: string,
  age: string,
  occupation: string,
  description: string,
  pictures: Picture
}
