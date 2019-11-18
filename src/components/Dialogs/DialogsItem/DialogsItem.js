import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
	return(
		<div className={s.dialogWrapper}>
					<NavLink className={s.dialogItem}
					to={'/dialogs/' + props.id}
					>
							{props.name}
					</NavLink>
				</div>
		)
}

export default DialogsItem