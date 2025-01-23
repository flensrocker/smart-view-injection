import { Provider } from '@angular/core';

import type { ViewConfig } from '../../view/core';
import { ViewConfigInjectionToken } from '../../view/core';

export const BikeViewConfig: ViewConfig = {
  label: 'Bike',
  loadView: () => import('../view/bike-view').then((m) => m.bikeView),
};

export const provideBikeViewConfig = (): Provider[] => [
  {
    provide: ViewConfigInjectionToken,
    useValue: BikeViewConfig,
    multi: true,
  },
];
