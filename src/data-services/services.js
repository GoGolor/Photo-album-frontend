import angular from 'angular';
import 'angular-resource';

//Data srv
import comments from './comments/actions';
import user from './user/actions';
import photos from './photos/actions';
import rating from './rating/actions';
import http from './http';

angular.module('dataServices', ['ngResource'])
	.service('commentsSrv', comments)
	.service('userSrv', user)
	.service('photosSrv', photos)
	.service('ratingSrv', rating)
	.service('http', http);