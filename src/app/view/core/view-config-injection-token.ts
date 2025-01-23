import { InjectionToken } from '@angular/core';

import type { ViewConfig } from './view-config';

export const ViewConfigInjectionToken = new InjectionToken<ViewConfig>(
  'ViewConfig'
);
