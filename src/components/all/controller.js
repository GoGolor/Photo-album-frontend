export default class {
	constructor($ngRedux, $scope, $location, photosSrv) {
		
		const unsubscribe = $ngRedux.connect(null, photosSrv)(this);
		$scope.$on('$destroy', unsubscribe);
		const scopeListener = $ngRedux.subscribe(() => {
			if (($ngRedux.getState().currentUser.initialized === true) && (this.currentUserId !== $ngRedux.getState().currentUser.id || $ngRedux.getState().photos.loaded !== true)) {
				this.currentUserId = $ngRedux.getState().currentUser.id;
				this.getAllPhotos();
			}
			if (this.photos != $ngRedux.getState().photos) {
				this.photos = $ngRedux.getState().photos;
			}
		});
		$scope.$on('$destroy', scopeListener);

		this.clearPhotos();

		this.activeBtnIndex = 0;
		this.sortingButtons = [
			{
				label: "New first",
				field: "created",
				directOrder: true
			},
			{
				label: "Popular first",
				field: "commonRating",
				directOrder: true
			}
		];
	}
}