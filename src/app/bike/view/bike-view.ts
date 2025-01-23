import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { View } from '../../view/core';

@Component({
  selector: 'bike-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Bike-View`,
})
export class BikeView implements View {}
