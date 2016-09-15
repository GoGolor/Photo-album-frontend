export const RELOAD_PHOTOS = 'RELOAD_PHOTOS';
function reloadPhotos(photos) {
	return {
		type: RELOAD_PHOTOS,
		photos
	}
}

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
function removePhotoById(photoId) {
	return {
		type: REMOVE_PHOTO,
		photoId
	}
}

export const REMOVE_ALL_PHOTOS = 'REMOVE_ALL_PHOTOS';
function removeAllPhotos() {
	return {
		type: REMOVE_ALL_PHOTOS
	}
}

export const ADD_PHOTO = 'ADD_PHOTO';
function addPhoto(photo) {
	return {
		type: ADD_PHOTO,
		photo
	}
}

export default (http, commentsSrv) => {
	
	function savePhoto(newPhoto) {
		return dispatch => {
			return http.post('addPhoto', {
				url: newPhoto.url,
				title: newPhoto.title,
				description: newPhoto.description
			}).then((photo) => {
				dispatch(addPhoto(photo));
				dispatch(commentsSrv.getCommentsById(photo.id));
			});
		}
	}
	
	function changePhoto(newPhoto) {
		return dispatch => {
			return http.post('changePhoto', {
				photoId: newPhoto.id,
				title: newPhoto.title,
				description: newPhoto.description
			})
			.then((photo) => {
				dispatch(removePhotoById(photo.id));
				dispatch(addPhoto(photo));
				dispatch(commentsSrv.getCommentsById(photo.id));
			});
		}
	}
	
	function deletePhotoById(photoId) {
		return dispatch => {
			return http.post('deletePhotoById', {
				photoId: photoId
			})
			.then(() => {
				dispatch(removePhotoById(photoId));
			});
		}
	}
	
	function getAllPhotos() {
		return dispatch => {
			return http.get('getAllPhotos')
			.then((photos) => {
				dispatch(reloadPhotos(photos));
				photos.map(photo => {
					dispatch(commentsSrv.getCommentsById(photo.id));
				})
			});
		}
	}
	
	function getUserPhotos () {
		return dispatch => {
			return http.get('getUserPhotos')
			.then((photos) => {
				dispatch(reloadPhotos(photos));
				photos.map(photo => {
					dispatch(commentsSrv.getCommentsById(photo.id));
				})
			});
		}
	}
	
	function clearPhotos () {
		return dispatch => {
			dispatch(removeAllPhotos());
		}
	}
	
	return {
		savePhoto,
		getAllPhotos,
		getUserPhotos,
		deletePhotoById,
		changePhoto,
		clearPhotos
	};
}