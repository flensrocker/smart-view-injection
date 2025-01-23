import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { View } from '../../view/core';

@Component({
  selector: 'car-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Car-View`,
})
export class CarView implements View {}
