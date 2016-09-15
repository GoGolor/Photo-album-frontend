export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
function changeCurrentUser(currentUser) {
	return {
		type: CHANGE_CURRENT_USER,
		currentUser
	}
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPost() {
	return {
		type: REQUEST_POSTS
	}
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePost() {
	return {
		type: RECEIVE_POSTS
	}
}

export default (http, photosSrv) => {
	function getCurrentUser() {
		return dispatch => {
			dispatch(requestPost());
			return http.get('getCurrentUser')
			.then((currentUser) => {
				dispatch(changeCurrentUser(currentUser));
				dispatch(receivePost());
			});
		}
	}
	
	function logout() {
		return dispatch => {
			dispatch(requestPost());
			return http.post('logout')
			.then((currentUser) => {
				dispatch(changeCurrentUser(currentUser));
				dispatch(photosSrv.clearPhotos());
				dispatch(receivePost());
			});
		}
	}
	
	function login(user) {
		return dispatch => {
			dispatch(requestPost());
			return http.get('login/'+user.login+'/'+user.password)
			.then((currentUser) => {
				dispatch(receivePost());
				if(currentUser){
					dispatch(changeCurrentUser(currentUser));
					return true;
				}
				return false;
			});
		}
	}
	
	function register(user) {
		return dispatch => {
			dispatch(requestPost());
			return http.get('register/'+user.login+'/'+user.password)
			.then((currentUser) => {
				dispatch(receivePost());
				if(currentUser){
					dispatch(changeCurrentUser(currentUser));
					return true;
				}
				return false;
			});
		}
	}
	
	function changeUser(user) {
		return dispatch => {
			return http.get('changeUser/'+user.login+'/'+user.name)
			.then(currentUser => {
				if(currentUser){
					dispatch(changeCurrentUser(currentUser));
					return true;
				}
				return false;
			});
		}
	}
	
	return {
		getCurrentUser,
		logout,
		login,
		register,
		changeUser
	}
}