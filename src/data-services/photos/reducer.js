import moment from 'moment';
import {RELOAD_PHOTOS, REMOVE_PHOTO, REMOVE_ALL_PHOTOS, ADD_PHOTO} from './actions';

function normilizePhoto(photo) {
	if(photo.updated){photo.updatedTime = moment(photo.updated).format("ddd MMM DD HH:mm:ss");}
	photo.createdTime = moment(photo.created).format("ddd MMM DD HH:mm:ss");
	return photo;
}

var initialState = [];
initialState.loaded = false;

function photos(state = initialState, action) {
	switch (action.type) {
		case RELOAD_PHOTOS:
			var newPhotos = action.photos.map(photo => {
				return normilizePhoto(photo);
			});
			newPhotos.loaded = true;
			return newPhotos;
		case REMOVE_PHOTO:
			return state.filter(photo => {
				if (photo.id != action.photoId) {
					return photo;
				}
			});
		case REMOVE_ALL_PHOTOS:
			return initialState;
		case ADD_PHOTO:
			var newState = state;
			newState.loaded = true;
			newState.push(normilizePhoto(action.photo));
			return newState;
		default:
			return state;
	}
}

export default photos