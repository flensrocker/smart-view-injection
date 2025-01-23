import { Provider } from '@angular/core';
import type { ViewConfig } from '../../view/core';
import { ViewConfigInjectionToken } from '../../view/core';

export const CarViewConfig: ViewConfig = {
  label: 'Car',
  loadView: () => import('../view').then((m) => m.carView),
};

export const provideCarViewConfig = (): Provider[] => [
  {
    provide: ViewConfigInjectionToken,
    useValue: CarViewConfig,
    multi: true,
  },
];
