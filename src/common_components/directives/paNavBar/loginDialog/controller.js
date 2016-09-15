export default class {
	constructor($mdDialog, $ngRedux, $scope, userSrv) {
		this.$mdDialog = $mdDialog;
		
		let unsubscribe = $ngRedux.connect(null, userSrv)(this);
		$scope.$on('$destroy', unsubscribe);
	}
	
	hide() {
		this.$mdDialog.hide();
	}
	
	cancel() {
		this.$mdDialog.cancel();
	}
	
	submit() {
		this.login(this.user).then(successLogin => {
			this.$mdDialog.hide(successLogin);
		});
	}
};