import { HTTP, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT } from "../constants/api"



export const getPeopleID = (url) => {
  const id = url.replace(HTTPS+SWAPI_ROOT+SWAPI_PEOPLE, "").replace(/\//g,"")
  return id

}

export const getPeopleIMG = (id) => {
   return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
};