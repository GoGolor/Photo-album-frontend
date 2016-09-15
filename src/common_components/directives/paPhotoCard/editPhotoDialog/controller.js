import moment from 'moment';

export default class {
	constructor($mdDialog, $ngRedux, $scope, photosSrv) {
		this.$mdDialog = $mdDialog;
		let unsubscribe = $ngRedux.connect(this.mapStateTothis, photosSrv)(this);
    	$scope.$on('$destroy', unsubscribe);
		
		this.newTitle = this.photo.title;
		this.newDescription = this.photo.description;
	}
	
	hide() {
		this.$mdDialog.hide();
	}
	
	cancel() {
		this.$mdDialog.cancel();
	}
	
	answer(newPhoto) {
		this.photo.title = newPhoto[0];
		this.photo.description = newPhoto[1];
		this.changePhoto(this.photo).then(() => {
			this.$mdDialog.hide();
		});
	}
}