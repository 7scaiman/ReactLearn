import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import ChangeLanguage from './components/Language/ChangeLanguage';
import SecondPage from './components/SecondPage';
import { UK } from './constants/language';
import css from "./style/App.module.css"
import  "./style/App.css"
function App(props) {
  const [link1,setlink1] = useState(css.linkTarget)
  const [link2,setlink2] = useState(css.link)

  const [Language,setLangue] = useState(UK)
  const ChangeUk= (change) => {
    setLangue(change)
  }
  const ChangeUa = (change) => {
     setLangue(change)
  }

  return (
    <BrowserRouter>
    <div>
     <div className='post'>
     
       <NavLink to="/" className={link1} onClick={() => {setlink1(css.linkTarget) 
      setlink2(css.link)}}>1 page</NavLink>
       <NavLink to="/secondpage" className={link2} onClick={() => {setlink2(css.linkTarget) 
        setlink1(css.link)}}>2 page</NavLink>
 
       <ChangeLanguage ChangeUk={ChangeUk} ChangeUa={ChangeUa} />
     </div>
    <Routes>
       <Route index element={<FirstPage Language={Language} setLangue={setLangue}/>}/>
       <Route path='/secondpage' element={<SecondPage Language={Language}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
