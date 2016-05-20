import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './place.html';

import { Infos } from '../../api/infos.js'

class PlaceCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.place = {};

    this.subscribe('infos');

    this.autorun(() => {
      if (GoogleMaps.loaded()) {
        $("#address")
          .geocomplete({
            map: '#map',
            details: 'form'
          })
          .bind('geocode:result',(event, result) => {
            this.place = result;

            $scope.$apply();
          });
      }
    });

    this.helpers({
      infos() {
        const selector ={};

        selector.place_id = this.getReactively('place.place_id');

        return Infos.find(selector);
      }
    })
  }
  search() {
    $("#address").trigger("geocode");
  }
}

const name = 'place';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
])
  .component(name, {
    templateUrl: 'imports/components/place/place.html',
    controller: ['$scope', PlaceCtrl]
})
  .config(config);

function config($stateProvider) {
  $stateProvider
    .state('place', {
      url: '/',
      template: '<place></place>'
    });
}
