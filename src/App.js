import React, { useState,useRef } from 'react';
import  "./style/App.css"
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import ChangeLanguage from './components/ChangeLanguage';
import MySelect from './components/UI/Select/MySelect';


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
      CreatePost:"Створити пост",
      NotEnoughPost:"Немає постів",
      Sorting:"Сортування",
      SortID: "По айді",
      SortTitle:"По назві",
      SortBody:"По опису" 
    }
  )


  const ChangeUk= (change) => {
    setLangue(change)
  }
  const ChangeUa = (change) => {
     setLangue(change)
  }

  const[selectedSort,setSelectedSort] = useState("")
  
  const [value,setValue] = useState("Hello Worldd")  
  const [posts,setPosts] = useState([
    {id:1,title:"Js b",body:value},
    {id:2,title:"Js a",body:value},
    {id:3,title:"Js c",body:value},
    {id:4,title:"Js d",body:value}
  ])
  let newid
  if(posts[0] === undefined){
     newid = 1
  }
  else{
   newid  = posts[ posts.length - 1].id+1 
  }

  const [post,setpost] = useState({id:newid,title:"  ",body:" "})
  
  const bodyInputRef = useRef();
  const desInputRef = useRef();

  const SortPost = (sort) => {
    if(sort == "id"){
      setSelectedSort(sort)
      setPosts([...posts].sort((a,b) => a[sort]-b[sort]))
    }
    else{
      setSelectedSort(sort)
      setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
    }
  }

  const AddNewPost = (NewPost) =>{
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
  return (
    <body>
    <div className="App">
      <ChangeLanguage ChangeUk={ChangeUk} ChangeUa={ChangeUa}/>
    <div>
      <AddPost bodyInputRef={bodyInputRef} Language={Language}  desInputRef={desInputRef} post={post} setpost={setpost} AddNewPost={AddNewPost} newID={newid}  />
    </div>
      <Counter Language={Language}/>
      <ClassCounter Language={Language}/>
      <div>
        <MySelect defaultValue={Language.Sorting} value={selectedSort} onChange={SortPost} options={[
          {value:"title",name:Language.SortTitle},
          {value:"body",name:Language.SortBody},
          {value:"id",name:Language.SortID}
        ]}/>
      </div>
      {posts.length !== 0
         ? <PostList RemovePost={RemovePost} posts ={posts} title={Language.PostList_title}  Language={Language} /> //// тернарний оператор
         : <h1>{Language.NotEnoughPost}</h1>

        
      }
      
    </div>
    </body>
  );
}

export default App;
