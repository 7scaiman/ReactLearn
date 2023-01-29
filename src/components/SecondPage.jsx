import React from 'react'

import { useState,useEffect } from 'react';
import { getAPIRecourse } from '../API/User'
import { API_PEOPLE } from '../constants/api';
import People from './2PAGE/People';

function SecondPage() {
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

        console.log(list)
        
    }
       useEffect(()=>{
        getRes(API_PEOPLE)
       },[])
  return (
    <div>
        {people&&(
            people.map((e) => <People name={e.name} gender={e.gender}/>)
        )
        }
    </div>
  )
}

export default SecondPage 