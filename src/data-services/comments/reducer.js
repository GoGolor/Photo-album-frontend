import moment from 'moment';
import {RELOAD_COMMENTS, REMOVE_COMMENT} from './actions';

function normilizeComment(comment) {
	if(comment.edited){comment.edited = moment(comment.edited).format("ddd MMM DD HH:mm:ss");}
	comment.commented = moment(comment.commented).format("ddd MMM DD HH:mm:ss");
	return comment;
}

function comments(state = [], action){
	switch (action.type){
		case RELOAD_COMMENTS:
			let newState  = state;
			action.comments.map(newComment => {
				newState = newState.filter(comment => {
					if(comment.id != newComment.id){
						return comment;
					}
				});
				newState.push(normilizeComment(newComment));
			});
			return newState;
		case REMOVE_COMMENT:
			return state.filter(comment => {
				if(comment.id !== action.comment.id){
					return comment;
				}
			});
		default:
			return state;
	}
}

export default comments