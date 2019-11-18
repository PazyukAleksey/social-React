import React from 'react';
import s from './Profile.module.css';

const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>			
			<img src={require('./avatar.png')} className={s.mainAvatar}/>
			<div className={s.info}>
				<h2 className={s.userName}>{props.name}</h2>
				<p className={s.profileItem} >Date of Birth: {props.birth}</p>
				<p className={s.profileItem} >City: {props.city}</p>
				<p className={s.profileItem} >Education: {props.education}</p>
				<p className={s.profileItem} >{props.site}</p>
			</div>
		</div>
		)

}
export default Profile;