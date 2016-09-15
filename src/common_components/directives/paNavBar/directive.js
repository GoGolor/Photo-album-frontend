import Controller from './controller.js';
import Template from './view.html';

export default function () {
	return {
		restrict: 'E',
		template: Template,
		controller: Controller,
		controllerAs: 'navBar'
	};
}