import moment from 'moment';
export default class {
	constructor($mdDialog, $location, userSrv, $ngRedux, $scope) {
		this.$mdDialog = $mdDialog;
		this.$ngRedux = $ngRedux;
		this.$location = $location;

		const unsubscribe = $ngRedux.connect(null, userSrv)(this);
		$scope.$on('$destroy', unsubscribe);

		
		this.getState();
		const unsubscribeStore = $ngRedux.subscribe(() => {
			this.getState();
		});
		$scope.$on('$destroy', unsubscribeStore);
	}
	
	getState() {
		if (this.$ngRedux.getState().currentUser.id === 0 && this.$ngRedux.getState().currentUser.initialized === true) {
			this.$location.path('/all-photos');
		}
		this.currentUser = this.$ngRedux.getState().currentUser;
		this.oldCurrentUser = {
			id: this.currentUser.id,
			name: this.currentUser.name,
			login: this.currentUser.login
		};
		this.oldCurrentUser.initialized = true;
	}

	errorDialog(ev) {
		this.$mdDialog.show(
			this.$mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Error')
				.content('Login exist!')
				.ok('Ok!')
				.targetEvent(ev)
			);
	}

	confirmDialog(ev) {
		this.$mdDialog.show(
			this.$mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Confirm')
				.content('Changes saved!')
				.ok('Ok!')
				.targetEvent(ev)
			);
	}

	saveUser() {
		this.changeUser(this.currentUser)
			.then(answ => {
				if (answ) {
					this.oldCurrentUser = this.currentUser;
					this.confirmDialog();
				}
				else {
					console.log(this.currentUser);
					console.log(this.oldCurrentUser);
					this.currentUser = this.oldCurrentUser;
					this.errorDialog();
				}
			});
	}
}