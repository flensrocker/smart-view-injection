import { Type } from '@angular/core';

import type { View } from './view';

export type ViewConfig = {
  readonly label: string;
  readonly loadView: () => Promise<Type<View>>;
};
