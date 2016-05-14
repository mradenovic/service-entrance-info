import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import sei from '../imports/components/serviceEntranceInfo/serviceEntranceInfo';



function onReady() {
  angular.bootstrap(document, ['serviceEntranceInfo']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}