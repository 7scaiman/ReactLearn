import React from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/input/MyInput'

function AddPost(props) {
  return (
 <form action="">
        <MyInput type="text" placeholder='Назва поста' ref={props.bodyInputRef} onChange={e=> props.setpost({...props.post, title:e.target.value})}/>
        <MyInput type="text" placeholder='Описання поста' ref={props.desInputRef} onChange={e => props.setpost({...props.post,body:e.target.value})} />
        <MyButton onClick={props.AddNewPost}>Create new post</MyButton>
    </form>

  )
}

export default AddPost