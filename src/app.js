import angular from 'angular';
import 'angular-material';
import 'angular-route';
import 'angular-animate';
import 'angular-aria';
import "angular-messages";
import 'angular-mocks';
import 'angular-resource';

import 'moment';

import ngRedux from 'ng-redux';
import { combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import './common_components/directives/directives';
import './data-services/services';

/*All*/
import AllCtrl from './components/all/controller';
import AllTmpl from './components/all/view.html';
/*My*/
import MyCtrl from './components/my/controller';
import MyTmpl from './components/my/view.html';

/*Profile*/
import ProfileCtrl from './components/profile/controller';
import ProfileTmpl from './components/profile/view.html';

/*Reducers*/
import commentsReducer from './data-services/comments/reducer';
import userReducer from './data-services/user/reducer';
import photosReducer from './data-services/photos/reducer';

let app = angular.module('photoalbumApp', [
	'ngRoute',
	'ngMaterial',
	'directives',
	'ngMessages',
	'dataServices',
	ngRedux
])
	.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when('/all-photos', {
					template: AllTmpl,
					controller: AllCtrl,
					controllerAs: 'allPhotos'
				})
				.when('/my-photos', {
					template: MyTmpl,
					controller: MyCtrl,
					controllerAs: 'myPhotos'
				})
				.when('/profile', {
					template: ProfileTmpl,
					controller: ProfileCtrl,
					controllerAs: 'profile'
				})
				.otherwise({
					redirectTo: '/all-photos'
				});
		}
	])
	.config($ngReduxProvider => {
		const reducer = combineReducers({
			comments: commentsReducer,
			currentUser: userReducer,
			photos: photosReducer
		});
		$ngReduxProvider.createStoreWith(reducer,[thunk,createLogger()]);
	});