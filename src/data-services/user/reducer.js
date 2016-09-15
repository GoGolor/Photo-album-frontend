import { combineReducers } from 'redux';
import {CHANGE_CURRENT_USER, REQUEST_POSTS, RECEIVE_POSTS} from './actions';

var initialCurentUser = {
	id: 0,
	login: '',
	name: '',
	initialized: false
}

function currentUser(state = initialCurentUser, action) {
	switch (action.type) {
		case CHANGE_CURRENT_USER:
			return Object.assign({}, state, action.currentUser);
		case REQUEST_POSTS:
			return Object.assign({}, state, {initialized: false});
		case RECEIVE_POSTS:
			return Object.assign({}, state, {initialized: true});
		default:
			return state;
	}
}

export default currentUser