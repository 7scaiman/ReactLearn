const SWAPI_ROOT = 'https://swapi.dev/api/'
const SWAPI_PEOPLE = SWAPI_ROOT+'people'

export const getAPIRecourse =  async (url) =>{
    try{
        const res = await fetch(url);/// await - почикати поки виконається fetch

          if(!res.ok){
            console.error('FETCH ERROR',res.status)
            return false
            }

            return await res.json();
    } catch(error){
         console.error('FETCH ERROR',error)
         return false
    }

//    fetch(url)   якщо не асинхрона фунція (async)s
//    .then(res => res.json())
//    .then(ss => console.log(ss))
//    .catch(erorr => console.log(erorr))
}

// getAPIRecourse(SWAPI_PEOPLE)
//   .then(body => console.log(body))


(async () => {
 const body = await getAPIRecourse(SWAPI_PEOPLE);
 console.log(body)
})()