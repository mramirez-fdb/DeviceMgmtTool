/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceQueueService } from './device-queue.service';

describe('Service: DeviceQueue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceQueueService]
    });
  });

  it('should ...', inject([DeviceQueueService], (service: DeviceQueueService) => {
    expect(service).toBeTruthy();
  }));
});
