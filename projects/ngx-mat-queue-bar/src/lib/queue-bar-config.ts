import { InjectionToken } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const QUEUE_BAR_DATA = new InjectionToken<any>('QueueBarData');

/** Injection token that can be used to specify default snack bar. */
export const QUEUE_BAR_DEFAULT_OPTIONS =
  new InjectionToken<MatSnackBarConfig>('queue-bar-default-options', {
    providedIn: 'root',
    factory: QUEUE_BAR_DEFAULT_OPTIONS_FACTORY,
  });

/** @docs-private */
export function QUEUE_BAR_DEFAULT_OPTIONS_FACTORY(): MatSnackBarConfig {
  return new MatSnackBarConfig();
}

export type QueueBarConfig = {
  maxOpenedSnackbars: number;
  wrapperClass?: string;
};

export const defaultQueueBarConfig: QueueBarConfig = {
  maxOpenedSnackbars: 4
};

export const QUEUE_BAR_CONFIG = new InjectionToken<QueueBarConfig>('queue-bar-config', {
  providedIn: 'root',
  factory: (): QueueBarConfig => defaultQueueBarConfig,
});
