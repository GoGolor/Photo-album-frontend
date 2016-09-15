/*Login dialog*/
import LoginCtrl from './loginDialog/controller';
import LoginTmpl from './loginDialog/view.html';

/*Register dialog*/
import RegisterCtrl from "./registerDialog/controller.js";
import RegisterTmpl from "./registerDialog/view.html";

export default class {
	constructor($scope, $mdDialog, $location, $ngRedux, userSrv) {
		this.$mdDialog = $mdDialog;
		this.$location = $location;
		
		let unsubscribe = $ngRedux.connect(this.mapStateToThis, userSrv)(this);
		$scope.$on('$destroy', unsubscribe);
		
		this.getCurrentUser();
	}
	
	navBtnStyle(btnName){
		if(this.$location.path() == btnName) {
			return { 'text-decoration': 'underline' };
		}
	}
	
	mapStateToThis(state) {
		return {
			currentUser: state.currentUser
		};
	}

	profile() {
		this.$location.path('/profile');
	}
	
	//Dialogs
	registerDialog() {
		this.$mdDialog.show({
			controller: RegisterCtrl,
			controllerAs: "registerCtrl",
			template: RegisterTmpl,
			clickOutsideToClose: true
		})
		.then(successRegister => {
			if(successRegister) {
				this.alertDialog('Register','Register done!');
			}
			else {
				this.alertDialog('Register','Choose another login!')
				.then(() => {
					this.registerDialog();
				});
			}
		});
	}
	
	alertDialog(title,msg) {
		return this.$mdDialog.show(
			this.$mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Register')
				.content(msg)
				.ok('Ok!')
				.targetEvent()
		);
	}
	
	loginDialog() {
		this.$mdDialog.show({
			controller: LoginCtrl,
			controllerAs: "loginCtrl",
			template: LoginTmpl,
			clickOutsideToClose: true
		})
		.then(successLogin => {
			if(!successLogin){
				this.alertDialog('Login','Wrong login or password!')
				.then(() => {
					this.loginDialog();
				});
			}
		});
	}
}