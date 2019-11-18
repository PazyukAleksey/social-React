import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return(
		<header className={s.mainHeader}>
  		<img className={s.mainLogo} src={require("./logoWWF.png")}/>
    </header>
		)
}

export default Header;