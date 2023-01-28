import React from 'react'
import { UA, UK } from '../../constants/language'

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
        let newLan = UK
        props.ChangeUk(newLan)
    }
    const ChangeUa = () => {
        let newLan = UA
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