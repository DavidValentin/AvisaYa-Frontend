// src/app/airbrake-error-handler.ts

import { ErrorHandler } from '@angular/core';
import { Notifier } from '@airbrake/browser';

export class AirbrakeErrorHandler implements ErrorHandler {
  airbrake: Notifier;

  constructor() {
    this.airbrake = new Notifier({
      projectId: 472145,
      projectKey: '928dfae0dc28ef31ebbe81e9f38d5d92',
      environment: 'production',
    });
  }

  handleError(error: any): void {
    this.airbrake.notify(error);
  }
}
