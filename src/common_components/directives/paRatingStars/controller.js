export default class {
	constructor($ngRedux, $scope, ratingSrv) {
		let unsubscribe = $ngRedux.connect(null, ratingSrv)(this);
    	$scope.$on('$destroy', unsubscribe);
		
		this.oldRating = this.rating;
	}
	
	click() {
		if (this.mode == 'edit') {
			this.oldRating = this.rating;
			this.addRating(this.photoId, this.rating);
		}
	}
	
	style(index) {
		if (index < this.rating) {
			return { 'color': 'black' };
		}
	}
	
	mouseleave() {
		if (this.mode == 'edit') {
			this.rating = this.oldRating;
		}
	}
	
	mouseover(index) {
		if (this.mode == 'edit') {
			this.rating = index + 1;
		}
	}
}