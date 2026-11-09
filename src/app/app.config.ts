import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import ForestPreset from './theme/forest.preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    providePrimeNG({
      ripple: true,

      theme: {
        preset: ForestPreset,

        options: {
          prefix: 'p',

          darkModeSelector: '.forest-dark',

          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      },
      license: process.env['primeNG-license-key'] || ''
    })
  ]
};
