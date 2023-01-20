import React from 'react'
import css from './MyButton.module.css'
function MyButton({children, ...props}) {
  return (
    <button {...props} className={css.myBtn}>
        {children}
    </button>
  )
}

export default MyButton