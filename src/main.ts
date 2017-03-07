import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
//change in 1.0.0-beta.23 https://github.com/angular/angular-cli/blob/master/CHANGELOG.md
//The app root module and component must now be imported directly. (e.g., use import { AppModule } from './app/app.module'; 
//instead of import { AppModule } from './app/';)
//import { AppModule } from './app/';
import { AppModule } from './app/app.module';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
