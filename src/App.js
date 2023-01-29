import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import ChangeLanguage from './components/Language/ChangeLanguage';
import SecondPage from './components/SecondPage';
import { UK } from './constants/language';
import  "./style/App.css"
function App(props) {
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
     
       <NavLink to="/" className="link">1 page</NavLink>
       <NavLink to="/secondpage" className="link">2 page</NavLink>
 
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
