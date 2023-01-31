import React, { useState,useRef, useMemo } from 'react';
import ClassCounter from './1PAGE/ClassCounter';
import Counter from './1PAGE/Counter';
import PostList from './1PAGE/PostList';
import AddPost from './1PAGE/AddPost';
import ChangeLanguage from './Language/ChangeLanguage';
import MySelect from './UI/Select/MySelect';
import MyInput from './UI/input/MyInput';


function FirstPage({Language,setLangue,...props}) {



  const[selectedSort,setSelectedSort] = useState("")
  
  const [value,setValue] = useState("Hello Worldd")  
  const [posts,setPosts] = useState([
    {id:1,title:"Js b",body:value},
    {id:2,title:"Js a",body:value},
    {id:3,title:"Js c",body:value},
    {id:4,title:"Js d",body:value}
  ])

 const [searchQuery,setSearchQuery] = useState("")


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
  

    const sortedPosts = useMemo(()=> {
      console.log("sdadasdasda  ")
      if(selectedSort)
      {
        return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts
    },[selectedSort,posts])

    const sortedAndSearchedPosts = useMemo(()=> {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    },[searchQuery, sortedPosts])
  
    const SortPost = (sort) => {
        setSelectedSort(sort)
    }

  const RemovePost = (post) => {
       setPosts(posts.filter(p=> p.id !== post.id))  /// видалення поста по айпи
  }
  return (
    <body>
    <div className="App">
    <div>
      <AddPost bodyInputRef={bodyInputRef} Language={Language}  desInputRef={desInputRef} post={post} setpost={setpost} AddNewPost={AddNewPost} newID={newid}  />
    </div>
      <Counter Language={Language}/>
      <ClassCounter Language={Language}/>
      <div>
        <MyInput type="text" placeholder={Language.SearchPost} onChange={(e) => setSearchQuery(e.target.value)}/>
        <MySelect defaultValue={Language.Sorting} value={selectedSort} onChange={SortPost} options={[
          {value:"title",name:Language.SortTitle},
          {value:"body",name:Language.SortBody},
        ]}/>
      </div>
      {sortedAndSearchedPosts.length !== 0
         ? <PostList RemovePost={RemovePost} posts ={sortedAndSearchedPosts} title={Language.PostList_title}  Language={Language} /> //// тернарний оператор
         : <h1>{Language.NotEnoughPost}</h1>
      }
      
    </div>
    </body>
  );
}

export default FirstPage;
