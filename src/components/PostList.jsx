import React from 'react'
import PostItem from './PosItem'

function PostList({posts, title}) {
  return (
    <div>
        <h1>{title}</h1>
    {posts.map(e => <PostItem post={e} key={e.id}/>)}
    </div>
  )
}

export default PostList