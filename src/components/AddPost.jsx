import React, {useRef} from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/input/MyInput'

function AddPost(props) {
    const bodyInputRef = useRef();
    const desInputRef = useRef();
    function change(){
        console.log(bodyInputRef.target.value)
        props.SetTitle(bodyInputRef.target.target)
    }
  return (
    <div>
    <form action="">
        <MyInput type="text" placeholder='Назва поста' ref={bodyInputRef} value={props.title} onChange={e=> props.SetTitle(e.target.value)}/>
        <MyInput type="text" placeholder='Описання поста' ref={desInputRef} onChange={e => props.setBodyInupt(e.target.value)} />
        <MyButton onClick={props.AddNewPost}>Create new post</MyButton>
    </form>

    </div>
  )
}

export default AddPost