import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from './DialogsItem/DialogsItem.js'
import Message from './Message/Message.js';

const DialogsPage = (props) => {

	let messageItem = props.message.map(item => <Message message={item.message} />);
	let dialogItem = props.dialogs.map( item => <DialogsItem name={item.name} id={item.id} />);
	return (
		<div className={s.dialogsPage}>
			<div className={s.dialogsWrapper}>
				{dialogItem}
			</div>
			<div className={s.messagesWrapper}>
				{messageItem}
			</div>
		</div>
		)
}

export default DialogsPage;