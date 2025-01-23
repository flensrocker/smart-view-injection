import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideBikeViewConfig } from './bike/core';
import { provideCarViewConfig } from './car/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideBikeViewConfig(),
    provideCarViewConfig(),
  ],
};
