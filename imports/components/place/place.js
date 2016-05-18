import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './place.html';

import { Infos } from '../../api/infos.js'

class PlaceCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.place = {};

    this.autorun(() => {
      if (GoogleMaps.loaded()) {
        $("#address")
          .geocomplete({
            map: '#map',
            details: 'form'
          })
          .bind('geocode:result',(event, result) => {
            this.place = result;

            console.log(result);
            $scope.$apply();
          });
      }
    });

    this.helpers({
      infos() {
        const selector ={};

        selector.place_id = this.getReactively('place.place_id');

        console.log(selector);
        console.log(Infos.find(selector));
        return Infos.find(selector);
      }
    })
  }

  addPlace() {
    let place = this.place;
    // Clear form
    this.place = null;
  }

  search() {
    $("#address").trigger("geocode");
    console.log('Submitted')
  }

  removePlace(place) {
    Places.remove(place._id);
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
