import React, { useState,useRef } from 'react';
import  "./style/App.css"
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import AddPost from './components/AddPost';


function App() {
  
  const [value,setValue] = useState("Hello Worldd")  
  const [posts,setPosts] = useState([
    {id:1,title:"Js REACT",body:value},
    {id:2,title:"Js REACT2",body:value},
    {id:3,title:"Js REACT3",body:value},
    {id:4,title:"Js REACT4",body:value}
  ])
  const [post,setpost] = useState({title:"  ",body:" "})



  const bodyInputRef = useRef();
  const desInputRef = useRef();

  function AddNewPost(e){
    e.preventDefault();
 
    let a = bodyInputRef.current.value;
    let b = desInputRef.current.value 
    console.log(bodyInputRef) //// виключає дефолне поведіння браузера
    if(a.trim() == "" || b.trim() == ""){
      return alert("The post should not be empty")
    }
    let newPost ={id:posts[ posts.length - 1].id+1,title:post.title ,body:post.body}
    setPosts([...posts,newPost]) //// добавлення елемента setElement([...arrEl,newElement])
    bodyInputRef.current.value = ""
    desInputRef.current.value = ""
  }
  return (
    <body>
    <div className="App">
    <div>
      <AddPost bodyInputRef={bodyInputRef}  desInputRef={desInputRef} post={post} setpost={setpost} AddNewPost={AddNewPost}  />
    </div>
      <Counter/>
      <ClassCounter/>
      <PostList posts ={posts} title="Cписок постів 1"/>
      <PostList posts ={posts} title="Cписок постів 2"/>
    </div>
    </body>
  );
}

export default App;
