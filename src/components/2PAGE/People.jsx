import React from 'react'

function People(props) {
  let gender = "n/a";
  if(props.gender == "male"){
    gender = props.Language.Male
  }
  else if (props.gender == "female"){
    gender = props.Language.Female;
  }
  return (
    <div className='PeopleTable'>
      <div className='flex'>
         <img src={props.img} alt="" />
         <div>
         <div className='flex'>
        <h1>{props.Language.Name}:{props.name}</h1>
      </div>
     <div className='flex'>
        <h1>{props.Language.Sex}:{gender}</h1>
     </div>
         </div>
      </div>
    </div>
  )
}

export default People