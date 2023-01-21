import React from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/input/MyInput'

function AddPost(props) {
  return (
    <div>
 <form action="">
        <MyInput type="text" placeholder='Назва поста' ref={props.bodyInputRef} value={props.titleInupt} onChange={e=> props.setTitleInupt(e.target.value)}/>
        <MyInput type="text" placeholder='Описання поста' ref={props.desInputRef} onChange={e => props.setBodyInupt(e.target.value)} />
        <MyButton onClick={props.AddNewPost}>Create new post</MyButton>
    </form>

    </div>
  )
}

export default AddPost