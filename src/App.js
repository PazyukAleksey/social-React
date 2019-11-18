import React from 'react';
import s from './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Navbar/Navbar.js';
import ProfilePage from './components/Profile/ProfilePage.js';
import DialogsPage from './components/Dialogs/Dialogs.js';
import NewsPage from './components/News/News.js';
import SettingPage from './components/Setting/Setting.js';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) =>  {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='header-wrapper'>
          <Header />
        </div>
        <div className='nav-wrapper'>
          <Nav />
        </div>
        <div className='content-wrapper'>        
          <Route path='/Dialogs' render={ () => <DialogsPage 
            message={props.data.dialogsPage.messages} 
            dialogs={props.data.dialogsPage.dialogs} />} />
          <Route path='/Profile' render={() => <ProfilePage
            data={props.data.profilePage}
            
            dispatch={props.dispatch}/>} /> 
          <Route path='/News' component={NewsPage} /> 
          <Route path='/Setting' component={SettingPage} /> 
        </div>
      </div>
    </BrowserRouter>

    );
}

export default App;
