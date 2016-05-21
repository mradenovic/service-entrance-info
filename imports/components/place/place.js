import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './place.html';

import { Infos } from '../../api/infos.js'

class PlaceCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.search = {};

    this.subscribe('infos');

    this.autorun(() => {
      if (GoogleMaps.loaded()) {
        $("#address")
          .geocomplete({
            map: '#map',
            details: 'form'
          })
          .bind('geocode:result',(event, result) => {
            this.search.place_id = result.place_id;
            this.search.formatted_address = result.formatted_address;
            this.search.address = result.formatted_address.split(',')[0];

            $scope.$apply();
          });
      }
    });

    this.helpers({
      infos() {
        const selector ={};

        selector.place_id = this.getReactively('search.place_id');

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
