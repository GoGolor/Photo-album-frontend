import angular from 'angular';

import paNavBar from './paNavBar/directive';
import paRatingStars from './paRatingStars/directive';
import paComment from './paComment/directive';
import paPhotoCard from './paPhotoCard/directive';
import paProgressCircular from './paProgressCircular/directive';
import paSortingBar from './paSortingBar/directive';
import compareTo from './paNavBar/registerDialog/compareToDirective';

angular.module('directives',[])
    .directive('paNavBar', paNavBar)
    .directive('paRatingStars', paRatingStars)
    .directive('paComment', paComment)
    .directive('paPhotoCard', paPhotoCard)
    .directive('paProgressCircular', paProgressCircular)
    .directive('paSortingBar', paSortingBar)
    .directive('compareTo', compareTo);