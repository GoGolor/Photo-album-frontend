import controller from './controller';
import template from './view.html';

export default function () {
	return {
		restrict: 'E',
		template: template,
		controller: controller,
		controllerAs: 'ratingStars',
		bindToController: true,
		scope: {
			rating: '=',
			mode: '@',
			photoId: '='
		}
	}
}