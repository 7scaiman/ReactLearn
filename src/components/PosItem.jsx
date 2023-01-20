import React from 'react'
import MyButton from './UI/Button/MyButton'

function PostItem(props) {
  return (
    <div className='post'>
        <div className='PostContent'>
            <strong>{props.post.id}{props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className='PostButton'>
            <MyButton>delete</MyButton>
        </div>
    </div>
  )
}

export default PostItem