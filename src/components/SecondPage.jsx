import React from 'react'

import { useState,useEffect } from 'react';
import { getAPIRecourse } from '../API/User'
import { API_PEOPLE } from '../constants/api';
import { getPeopleID, getPeopleIMG } from '../services/getPeopleData';
import People from './2PAGE/People';

function SecondPage({Language, ...props}) {
    const [people,setPeople] = useState(null)
       const getRes = async (url) => { 
        const res = await getAPIRecourse(url);
       const list = res.results.map((el) => {
             const id = getPeopleID(el.url)
             const img = getPeopleIMG(id);
            return {
                name:el.name,
                gender:el.gender,
                img:img,
            }
        })
          setPeople(list)
    }
       useEffect(()=>{
        getRes(API_PEOPLE)
       },[])
  return (
    <div>
        {people!== null
            ?people.map((e) => <People name={e.name} gender={e.gender} Language={Language} img={e.img}/>)
            :<div>
              <h1>LOADING...</h1>
               <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'/>
            </div>
        }
    </div>
  )
}

export default SecondPage 