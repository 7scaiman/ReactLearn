import React from 'react'
let uk = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/2048px-United-kingdom_flag_icon_round.svg.png"
let ua = "https://vectorflags.s3.amazonaws.com/flags/ua-circle-01.png"
function ChangeLanguage(props) {
    //     AlertPost:"Рядок немає бути пуста",
    //     PostList_title:"Cписок постів",
    //     NamePost:"Назва поста",
    //     Description:"Описання поста",
    //     Increment:"Плюс",
    //     Decrement:"мінус",
    //     DeletePost:"Видалити",
    //     CreatePost:"Створити пост"    
    //   }
    const ChangeUk = () => {
        let newLan = {
            AlertPost: "The line must not be empty",
            PostList_title: "Post List",
            NamePost: "Post name",
            Description: "Description",
            Increment: "Increment",
            Decrement: "Decrement",
            DeletePost: "Delete",
            CreatePost: "Create new post"
        }
        props.ChangeUk(newLan)
    }
    const ChangeUa = () => {
        let newLan = {
            AlertPost:"Рядок немає бути пуста",
            PostList_title:"Cписок постів",
            NamePost:"Назва поста",
            Description:"Описання поста",
            Increment:"Плюс",
            Decrement:"мінус",
            DeletePost:"Видалити",
            CreatePost:"Створити пост"    
          }
          props.ChangeUa(newLan)
    }
    return (
        <div className='language'>
            <a onClick={ChangeUk}>
                <img src={uk} alt="#" className='flag' />
            </a>
            <a onClick={ChangeUa}>
                <img src={ua} alt="#" className='flag' />
            </a>
        </div>
    )
}

export default ChangeLanguage