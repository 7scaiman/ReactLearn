import React, { useState,useRef } from 'react';
import  "./style/App.css"
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/Button/MyButton';

function App() {
  
  const [value,setValue] = useState("Hello World")  
  const [posts,setPost] = useState([
    {id:1,title:"Js REACT",body:value},
    {id:2,title:"Js REACT2",body:value},
    {id:3,title:"Js REACT3",body:value}
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
    let newPost ={id:posts.id+1,title:titleInupt,body:bodyInupt}
    
  setPost([...posts],newPost)
  }
  return (
    <body>
    <div className="App">
    <div>
    <form action="">
        <MyInput type="text" placeholder='Назва поста' ref={bodyInputRef} value={titleInupt} onChange={e=> setTitleInupt(e.target.value)}/>
        <MyInput type="text" placeholder='Описання поста' ref={desInputRef} onChange={e => setBodyInupt(e.target.value)} />
        <MyButton onClick={AddNewPost}>Create new post</MyButton>
    </form>

    </div>
      <Counter/>
      <ClassCounter/>
      <PostList posts ={posts} title="Cписок постів 1"/>
    </div>
    </body>
  );
}

export default App;
