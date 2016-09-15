import moment from 'moment';

export default class {
	constructor($ngRedux, $scope, commentsSrv) {
		let unsubscribe = $ngRedux.connect(null, commentsSrv)(this);
    	$scope.$on('$destroy', unsubscribe);
		
		this.mode = 'view';
	}
	
	//Toggle edit-view mode
	toggleMode() {
		if(this.mode == 'view'){this.mode = 'edit';}
		else{this.mode = 'view';}
	}
}