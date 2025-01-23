import {
  ChangeDetectionStrategy,
  Component,
  resource,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ViewConfig, ViewConfigInjectionToken } from '../core';

import { injectMulti } from './inject-multi';

@Component({
  selector: 'select-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `Select View
    <select [(ngModel)]="selectedViewConfig">
      <option [ngValue]="null" [disabled]="true">choose</option>
      @for (viewConfig of viewConfigs; track $index) {
      <option [ngValue]="viewConfig">{{ viewConfig.label }}</option>
      }
    </select>

    <div>
      @let cmp = view.value(); @if (cmp){
      {{ cmp.data }}
      }
    </div>`,
})
export class SelectView {
  protected readonly viewConfigs = injectMulti(ViewConfigInjectionToken);

  protected readonly selectedViewConfig = signal<ViewConfig | null>(null);

  protected readonly view = resource({
    request: this.selectedViewConfig,
    loader: async ({ request: viewConfig }) => {
      if (viewConfig == null) {
        return null;
      }

      return await viewConfig.loadView();
    },
  });
}
