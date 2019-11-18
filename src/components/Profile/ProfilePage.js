import React from 'react';
import s from './ProfilePage.module.css';
import Wallpaper from './wallpaper/wallpaper.js';
import Profile from './profile/Profile.js';
import MyPosts from './blockPosts/myPosts/myPosts.js';
import Post from './blockPosts/Posts/Post.js';

const ProfilePage = (props) => {
  let posts = props.data.posts.map( item => <Post message={item.message} src={item.avatar}/>);
  return (
  	<div className={s.profilePageWrapper}>
  		<Wallpaper src={props.data.wallpaper.src}/>
  		<Profile 
  			name={props.data.profile.name}
        birth={props.data.profile.birth}
  			city={props.data.profile.city}
  			education={props.data.profile.education}
  			site={props.data.profile.site}
  		/>
  		<MyPosts 
        
        dispatch={props.dispatch}
        newPostText={props.data.newPostText}
      />
      {posts}
  	</div>
  	);
}

export default ProfilePage;