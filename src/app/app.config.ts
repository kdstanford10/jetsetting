import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // New import
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { environment } from '../environments/environment'; // New import

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)), // New provider
    provideFunctions(() => getFunctions()),
  ],
};
