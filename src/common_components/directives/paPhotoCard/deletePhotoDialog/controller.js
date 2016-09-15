export default class {
	constructor($mdDialog, $ngRedux, $scope, photosSrv) {
		this.$mdDialog = $mdDialog;
		let unsubscribe = $ngRedux.connect(this.mapStateTothis, photosSrv)(this);
    	$scope.$on('$destroy', unsubscribe);
	}
	
	hide() {
		this.$mdDialog.hide();
	}
	
	cancel() {
		this.$mdDialog.cancel();
	}
	
	answer(newPhoto) {
		this.deletePhotoById(this.photo.id);
		this.$mdDialog.hide();
	}
}