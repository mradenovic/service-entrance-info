import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from'./serviceEntranceInfo.html';

import navigation from '../navigation/navigation';


class ServiceEntranceInfoCtrl {}

const name = 'serviceEntranceInfo';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  navigation.name
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: ServiceEntranceInfoCtrl
})
  .config(config);

function config($locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}
