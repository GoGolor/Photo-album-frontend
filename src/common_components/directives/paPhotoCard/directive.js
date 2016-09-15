import PhotoCardCtrl from './controller';
import PhotoCardTmpl from './view.html';

export default function () {
	return {
		restrict: 'E',
		template: PhotoCardTmpl,
		controller: PhotoCardCtrl,
		controllerAs: 'photoCard',
		scope: {
			photo: '=',
			mode: '@'
		},
		bindToController:true
	}
}