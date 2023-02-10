import React, {useState }from "react"; /// rfce
import { useEffect } from "react";
import MyButton from "../UI/Button/MyButton";


function Counter(props) {
  const [likes,setLikes] = useState(0)
  useEffect(()=> {
   const raw = localStorage.getItem("likes") || []
   setLikes(JSON.parse(raw))
  },[])
  useEffect(() => {
      localStorage.setItem("likes",JSON.stringify(likes))
  },[likes]) /// componentDidMount, якщо добивити в масив яксь елемент то коли він буде імянтися буде спрацьовувати ця функція
  
  function Increment(){
    setLikes(likes+1)
  }
  function Decrement(){
    setLikes(likes-1)
  }
  return(
    <div className="post">


        <h1 >{likes}</h1>
        <div>
           <MyButton onClick={Increment}>{props.Language.Increment}</MyButton>
           <MyButton onClick={Decrement}>{props.Language.Decrement}</MyButton>
        </div>
    </div>
  
  );
  
}
export default  Counter
