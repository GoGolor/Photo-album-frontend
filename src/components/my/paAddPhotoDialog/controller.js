export default class {
	constructor($mdDialog, photosSrv, $ngRedux, $scope) {
		this.$mdDialog = $mdDialog;
		const unsubscribe = $ngRedux.connect(null, photosSrv)(this);
		$scope.$on('$destroy', unsubscribe);
	}
	
	hide() {
		this.$mdDialog.hide();
	}
	
	cancel() {
		this.$mdDialog.cancel();
	}
	
	submit() {
		this.savePhoto(this.newPhoto)
			.then(() => {
				this.$mdDialog.hide();
			});
	};
}