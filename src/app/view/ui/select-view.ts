import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { ViewConfigInjectionToken } from '../core';

import { injectMulti } from './inject-multi';

@Component({
  selector: 'select-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Select View
    <select>
      <option [value]="null" [disabled]="true">choose</option>
      @for (view of views; track view.label) {
      <option [value]="view">{{ view.label }}</option>
      }
    </select>`,
})
export class SelectView {
  protected readonly views = injectMulti(ViewConfigInjectionToken);
}
