import Controller from './controller';
import Template from './view.html';

export default function () {
	return {
		restrict: 'E',
		template: Template,
		scope: {
			comment: '=',
			deleteMode: '=',
			editMode: '='
		},
		bindToController: true,
		controller: Controller,
		controllerAs: "commentCtrl"
	}
}