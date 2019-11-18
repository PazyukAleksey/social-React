import store from './components/Redux/State.js';
import * as serviceWorker from './serviceWorker';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let renderEntireTree = (store) =>	{	
ReactDOM.render(<App 
	data={store.getState()}

		dispatch={store.dispatch.bind(store)}/>,
	 document.getElementById('root'));
};

renderEntireTree(store);

{store.subscribe(renderEntireTree);}