import React, { useState,useRef } from 'react';
import  "./style/App.css"
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  
  const [value,setValue] = useState("Hello World")  
  const [posts,setPost] = useState([
    {id:1,title:"Js REACT",body:value},
    {id:2,title:"Js REACT2",body:value},
    {id:3,title:"Js REACT3",body:value},
    {id:4,title:"Js REACT4",body:value}
  ])
  const [titleInupt,setTitleInupt] = useState("")
  const [bodyInupt,setBodyInupt] = useState("")
  const bodyInputRef = useRef();
  const desInputRef = useRef();
  function changeValue(e){
    setValue.push(e.currentTarget.value)
  }
  function AddNewPost(e){
    e.preventDefault();  //// виключає дефолне поведіння браузера
    console.log(e)
    let newPost ={id:4,title:titleInupt ,body:bodyInupt}
    console.log(newPost)
    setPost([...posts,newPost]) //// добавлення елемента setElement([...arrEl,newElement])
  }
  return (
    <body>
    <div className="App">
    <div>
      <AddPost bodyInputRef={bodyInputRef} titleInupt={titleInupt} setTitleInupt={setTitleInupt} desInputRef={desInputRef} setBodyInupt={setBodyInupt} AddNewPost={AddNewPost}  />
    </div>
      <Counter/>
      <ClassCounter/>
      <PostList posts ={posts} title="Cписок постів 1"/>
    </div>
    </body>
  );
}

export default App;
