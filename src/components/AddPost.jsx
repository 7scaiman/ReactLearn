import React from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/input/MyInput'

function AddPost(props) {
  function CreatePost(e){
    e.preventDefault();
     let NewPost = {id:props.newID,title:props.post.title ,body:props.post.body}
      props.AddNewPost(NewPost)
   }

  return (
 <form action="">
        <MyInput type="text" placeholder={props.Language.NamePost} ref={props.bodyInputRef} onChange={e=> props.setpost({...props.post, title:e.target.value})}/>
        <MyInput type="text" placeholder={props.Language.Description} ref={props.desInputRef} onChange={e => props.setpost({...props.post,body:e.target.value})} />
        <MyButton onClick={CreatePost}>{props.Language.CreatePost}</MyButton>
    </form>

  )
}

export default AddPost