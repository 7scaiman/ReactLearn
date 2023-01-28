import React from 'react'
import MyButton from '../UI/Button/MyButton'

function PostItem(props) {
  const  DeletePost = () =>{ /// callback
    props.RemovePost(props.post)  
  }
  return (
    <div className='post'>
        <div className='PostContent'>
            <strong>{props.post.id}    {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className='PostButton'>
            <MyButton onClick={DeletePost}>{props.Language.DeletePost}</MyButton>
        </div>
    </div>
  )
}

export default PostItem