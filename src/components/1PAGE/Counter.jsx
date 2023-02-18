import React, {useState, useEffect }from "react"; /// rfce
import MyButton from "../UI/Button/MyButton";


function Counter(props) {
  const [likes,setLikes] = useState(+localStorage.getItem("likes") || 0)
 
  useEffect(() => {
      localStorage.setItem("likes",JSON.stringify(likes))
  },[likes]) /// componentDidMount, якщо добивити в масив яксь елемент то коли він буде імянтися буде спрацьовувати ця функція
  
  function Increment(){
    setLikes(prevlikes => prevlikes+1)
  }
  function Decrement(){
    setLikes(prevlikes => prevlikes-1)
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
