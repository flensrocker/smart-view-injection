import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideBikeViewConfig } from './bike/core/bike-view-config';
import { provideCarViewConfig } from './car/core/car-view-config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideBikeViewConfig(),
    provideCarViewConfig(),
  ],
};
