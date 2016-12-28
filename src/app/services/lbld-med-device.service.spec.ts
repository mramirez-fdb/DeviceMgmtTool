/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LbldMedDeviceService } from './lbld-med-device.service';

describe('Service: LbldMedDevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LbldMedDeviceService]
    });
  });

  it('should ...', inject([LbldMedDeviceService], (service: LbldMedDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
