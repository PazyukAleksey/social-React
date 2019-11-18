const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

let store = {
	_arr: {
		dialogsPage: {
			dialogs: [
				{ name: 'Aleks', id: 1 },
				{ name: 'Ira', id: 2 },
				{ name: 'Valera', id: 3 },
				{ name: 'Sveta', id: 4 }
			],
			messages: [
				{ message: 'Hi from arr'},
				{ message: 'Second message'},
				{ message: 'Third message from arr'},
				{ message: 'lol'},			
				{ message: 'Hi from state.js'}
			]		
		},
		profilePage: {
			wallpaper: {
				src: 'wallpaper.png'
			},
			profile:	{
					name: 'Oleksiy Paziuk',
					city: 'Krivoy Rog',
	  			education: 'Step',
	  			site: 'google.com',
	  			birth: '22.07.1993'
				},
			posts: [
				{message: 'hello from first post', avatar: 'avatar.png'},
				{message: 'hello from second post width state.js', avatar: 'avatar1.png'},
				{message: 'hello they are', avatar: 'avatar.png'}
				],
			newPostText: 'hello'
		}	},
	_callSubscriber() {		console.log(".!.");	},

	getState() {		return this._arr	},
	subscribe(observer){		this._callSubscriber = observer;	},
	
	dispatch(action){
		if (action.type === ADD_POST) {
			let newPost = {message: this._arr.profilePage.newPostText, avatar: 'avatar.png'};	
			this._arr.profilePage.posts.push(newPost);
			this._arr.profilePage.newPostText = '';
			this._callSubscriber(this);	
		} else if(action.type === UPDATE_NEW_POST_TEXT) {
			this._arr.profilePage.newPostText = action.text;
			this._callSubscriber(this);
		}
	}
}

export default store;

window.store = store;