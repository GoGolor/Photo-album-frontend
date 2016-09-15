export const RELOAD_COMMENTS = 'RELOAD_COMMENTS';
function reloadComments(comments) {
	return {
		type: RELOAD_COMMENTS,
		comments
	}
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
function removeComment(comment) {
	return {
		type: REMOVE_COMMENT,
		comment
	}
}

export default (http) => {
	function saveComment(newComment) {
		return dispatch => {
			return http.post('addComment', {
				photoId: newComment.photoId,
				comment: newComment.comment
			})
			.then(() => {
				return dispatch(getCommentsById(newComment.photoId));
			});
		}
	}

	function changeComment(newComment) {
		return dispatch => {
			return http.post('changeComment', {
				commentId: newComment.id,
				comment: newComment.comment
			})
			.then(() => {
				return dispatch(getCommentsById(newComment.photoId));
			});
		}
	}

	function deleteComment(comment) {
		return dispatch => {
			return http.post('deleteCommentById', {
				commentId: comment.id
			})
			.then(() => {
				dispatch(removeComment(comment));
			});
		}
	}

	function getCommentsById(photoId) {
		return dispatch => {
			return http.get('getCommentsByPhotoId/' + photoId)
				.then((comments) => {
					dispatch(reloadComments(comments));
				});
		}
	}
	return {
		saveComment,
		changeComment,
		deleteComment,
		getCommentsById
	};
}