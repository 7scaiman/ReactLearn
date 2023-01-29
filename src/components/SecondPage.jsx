import React from 'react'

import { useState,useEffect } from 'react';
import { getAPIRecourse } from '../API/User'
import { API_PEOPLE } from '../constants/api';
import People from './2PAGE/People';

function SecondPage({Language, ...props}) {
    const [people,setPeople] = useState(null)
       const getRes = async (url) => { 
        const res = await getAPIRecourse(url);
       const list = res.results.map((el) => {
            return {
                name:el.name,
                gender:el.gender,
                url: el.url
            }
        })
          setPeople(list)
          console.log(res)
        
    }
       useEffect(()=>{
        getRes(API_PEOPLE)
       },[])
  return (
    <div>
        {people!== null
            ?people.map((e) => <People name={e.name} gender={e.gender} Language={Language}/>)
            :<div>
              <h1>LOADING...</h1>
               <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'/>
            </div>
        }
    </div>
  )
}

export default SecondPage 