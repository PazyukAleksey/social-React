import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.postWraper}>
			<img className={s.avatar}
			 src={require('./' + props.src)} />
			<p className={s.postContent}>{props.message}</p>
		</div>
		);
}

export default Post;