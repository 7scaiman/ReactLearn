import React, {useState }from "react"; /// rfce
import MyButton from "./UI/Button/MyButton";


function Counter(props) {
  const [likes,setLikes] = useState(0)
  
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
