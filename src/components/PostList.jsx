import React from 'react'
import PostItem from './PosItem'

function PostList({posts, title, Language,...props}) {
  return (
    <div>
        <h1>{title}</h1>
    {posts.map(e => <PostItem RemovePost={props.RemovePost} Language={Language} post={e} key={e.id}/>)}
    </div>
  )
}

export default PostList