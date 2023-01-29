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