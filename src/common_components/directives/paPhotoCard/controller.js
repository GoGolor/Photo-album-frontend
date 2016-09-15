import moment from 'moment';

/*Edit dialog*/
import editDialogCtrl from './editPhotoDialog/controller';
import editDialogTmpl from './editPhotoDialog/view.html';

/*Delete dialog*/
import deleteDialogCtrl from './deletePhotoDialog/controller';
import deleteDialogTmpl from './deletePhotoDialog/view.html';

export default class {
	constructor($mdDialog, $ngRedux, commentsSrv, photosSrv, $scope) {
		this.$mdDialog = $mdDialog;
		
		const unsubscribe = $ngRedux.connect(this.mapStateToThis, Object.assign(commentsSrv,photosSrv))(this);
		$scope.$on('$destroy', unsubscribe);
		
		const scopeListener = $ngRedux.subscribe(() => {
			this.comments = $ngRedux.getState().comments.filter(comment => {
				if(comment.photoId === this.photo.id){
					return comment;
				}
			});
		});
		$scope.$on('$destroy', scopeListener);
		
		this.commentsShow = false;
	}

	mapStateToThis(state) {
		return {
			currentUser: state.currentUser
		};
	}
	
	//Comments
	toggleComments() {
		this.commentsShow = !this.commentsShow;
	}

	addComment() {
		this.saveComment({
			photoId: this.photo.id,
			comment: this.newComment
		})
		.then(() => {
			this.newComment = "";
		});
	}
	
	//Mode
	checkMode(modeName) {
		return this.mode == modeName;
	}

	editPhoto() {
		this.$mdDialog.show({
			controller: editDialogCtrl,
			controllerAs: "dialog",
			template: editDialogTmpl,
			clickOutsideToClose: true,
			locals: {
				photo: this.photo
			},
			bindToController: true
		});
	}
	
	deletePhoto() {
		this.$mdDialog.show({
			controller: deleteDialogCtrl,
			controllerAs: "dialog",
			template: deleteDialogTmpl,
			clickOutsideToClose: true,
			locals: {
				photo: this.photo
			},
			bindToController: true
		});
	}
}