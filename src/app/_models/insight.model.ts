import { Picture } from './picture.model'

export interface Insight {
  id:string,
  title: string,
  description: string,
  pictures: Picture
}
