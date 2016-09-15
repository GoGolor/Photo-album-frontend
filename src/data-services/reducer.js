import { combineReducers } from 'redux';

import comments from './comments/reducer';
import user from './user/reducer';
import photos from './photos/reducer';

const dataReducer = combineReducers({
	comments,
	user,
	photos
});

export default dataReducer