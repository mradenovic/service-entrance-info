import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { Meteor } from "meteor/meteor";

import '../both/methods/places.methods';
import { AppModule } from './imports/app/app.module';

enableProdMode();

Meteor.startup(() => {
  console.info('Meteor.startup()')
  platformBrowserDynamic().bootstrapModule(AppModule);
});
