import React from 'react';
import s from './wallpaper.module.css'

const Wallpaper = (props) => {		
	return(
		<img src={require('./' + props.src)} className={s.profileWallpaper}/>
		)  		
}

export default Wallpaper;

