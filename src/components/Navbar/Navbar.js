import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return ( 
		<nav className={s.mainNavigation}>
			<ul className={s.navigationList}>
				<li className={s.navigationItem}>
					<NavLink to='/Profile' activeClassName={s.active} >Profile</NavLink >
				</li>
				<li className={s.navigationItem}>
					<NavLink to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink >
				</li>
				<li className={s.navigationItem}>
					<NavLink to='/News' activeClassName={s.active} >News</NavLink >
				</li>
				<li className={s.navigationItem}>
					<NavLink to='/Setting' activeClassName={s.active} >Setting</NavLink >
				</li>
			</ul>			
		</nav>	
		);
}

export default Navbar;

