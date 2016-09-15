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
		if (this.user.password === this.user.confirmPassword) {
			this.register(this.user)
			.then((answ) => {
				this.$mdDialog.hide(answ);
			});
		}
	}
}