import React from 'react';
import s from './myPosts.module.css';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../Redux/State.js'

const myPosts = (props) => {
	let newPostArea = React.createRef();
	let addPost = () =>{
		props.dispatch(addPostActionCreator())
	}
	let onPostChange = () => {
		let text = newPostArea.current.value;
  	props.dispatch(updateNewPostTextActionCreator(text))
	}
	return(
			<div className={s.postWrapper}>
				<h2>MyPosts</h2>
				<textarea placeholder="Your news..." 
				  onChange={onPostChange}
				  ref={newPostArea}
				  value={props.newPostText}></textarea>
				<div className={s.newPostBtnWrapper}>
					<button className={s.newPostBtn}
					onClick={addPost}
				  >Send</button>
				</div>
			</div> 
		);
}

export default myPosts;