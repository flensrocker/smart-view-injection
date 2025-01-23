import type { View } from './view';

export type ViewConfig = {
  readonly label: string;
  readonly loadView: () => Promise<View>;
};
