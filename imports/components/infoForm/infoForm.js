import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './infoForm.html';
import { Infos } from '../../api/infos';

class InfoFormCtrl {
  constructor( $Scope, $stateParams) {
    $Scope.viewModel(this);

    this.subscribe('infos');

    console.log('$stateParam: ', $stateParams);

    this.helpers({
      info() {
        let item = Infos.findOne({
          _id: $stateParams.infoId
        });
        if (!item) {
          console.log(item);
          item = {};
          item.place_id = $stateParams.placeId;
          console.log(item);
        }
        return item;
      }
    });
  }

  updateInfo (info) {
    Meteor.call('infos.update', info);
  }

}

const name = 'infoForm';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: ['$scope', '$stateParams', InfoFormCtrl]
})
  .config(config);

function config($stateProvider) {

  $stateProvider.state('infoForm', {
    url: '/infos/:infoId',
    template: '<info-form></info-form>',
    params: {
      placeId: null
    }
  });
}

