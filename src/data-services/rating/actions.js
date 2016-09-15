export default (http) => {
	function addRating(photoId, rating) {
		return dispatch => {
			return http.post('addRating', {
				photoId: photoId,
				rating: rating
			});
		}
	}
	return {
		addRating
	};
}