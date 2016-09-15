import dialogCtrl from './paAddPhotoDialog/controller';
import dialogTmpl from './paAddPhotoDialog/view.html';

export default class {
	constructor($mdDialog, $location, $scope, $ngRedux, photosSrv) {
		this.$mdDialog = $mdDialog;
		const unsubscribe = $ngRedux.connect(null, photosSrv)(this);
		$scope.$on('$destroy', unsubscribe);
		const scopeListener = $ngRedux.subscribe(() => {
			if ($ngRedux.getState().currentUser.id === 0 && $ngRedux.getState().currentUser.initialized === true) {
				$location.path('/all-photos');
			}
			if ($ngRedux.getState().currentUser.initialized === true && $ngRedux.getState().photos.loaded !== true) {
				this.getUserPhotos();
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
			},
			{
				label: "My favorite first",
				field: "userRating",
				directOrder: true
			},
			{
				label: "Alphabetical (A-Z)",
				field: "title",
				directOrder: false
			}
		];
	}

	addPhotoDialog() {
		this.$mdDialog.show({
			controller: dialogCtrl,
			controllerAs: "dialog",
			template: dialogTmpl,
			clickOutsideToClose: true
		});
	}
};