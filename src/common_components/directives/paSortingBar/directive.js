import controller from './controller';
import template from './template.html';

export default function () {
	return {
		restrict: 'E',
		template: template,
		bindToController: {
			buttons: '=',
			activeBtnIndex: '='
		},
		scope: true,
		controller: controller,
		controllerAs: 'sortingBar'
	}
}