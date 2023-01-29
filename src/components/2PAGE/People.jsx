import React from 'react'

function People(props) {
  return (
    <div className='PeopleTable'>
      <div className='flex'>
        <h1>NAME:{props.name}</h1>
      </div>
     <div className='flex'>
        <h1>GENDER:{props.gender}</h1>
     </div>
    </div>
  )
}

export default People