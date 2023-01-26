import React, { useState,useRef } from 'react';
import  "./style/App.css"
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import ChangeLanguage from './components/ChangeLanguage';


function App() {
  const [Language,setLangue] = useState(
    {
      AlertPost:"Рядок немає бути пуста",
      PostList_title:"Cписок постів",
      NamePost:"Назва поста",
      Description:"Описання поста",
      Increment:"Плюс",
      Decrement:"мінус",
      DeletePost:"Видалити",
      CreatePost:"Створити пост"    
    }
  )
  const ChangeUk= (change) => {
    setLangue(change)
  }
  const ChangeUa = (change) => {
     setLangue(change)
  }
  
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

  const AddNewPost = (NewPost) =>{
    console.log(Language)
    let a = bodyInputRef.current.value;
    let b = desInputRef.current.value 
    console.log(bodyInputRef) //// виключає дефолне поведіння браузера
    if(a.trim() == "" || b.trim() == ""){
      return alert(Language.AlertPost)
    }
    setPosts([...posts,NewPost]) //// добавлення елемента setElement([...arrEl,newElement])
    bodyInputRef.current.value = ""
    desInputRef.current.value = ""
  }

  const RemovePost = (post) => {
       setPosts(posts.filter(p=> p.id !== post.id))  /// видалення поста по айпи
  }
 let newid
 if(posts[0] === undefined){
    newid = 1
 }
 else{
  newid  = posts[ posts.length - 1].id+1 
 }
  return (
    <body>
    <div className="App">
      <ChangeLanguage ChangeUk={ChangeUk} ChangeUa={ChangeUa}/>
    <div>
      <AddPost bodyInputRef={bodyInputRef} Language={Language}  desInputRef={desInputRef} post={post} setpost={setpost} AddNewPost={AddNewPost} newID={newid}  />
    </div>
      <Counter Language={Language}/>
      <ClassCounter Language={Language}/>
      {posts.length !== 0
         ? <PostList RemovePost={RemovePost} posts ={posts} title={Language.PostList_title} Language={Language} />
         : <h1>not enough post</h1>

        
      }
      
    </div>
    </body>
  );
}

export default App;
