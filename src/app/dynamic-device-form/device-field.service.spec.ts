/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceFieldService } from './device-field.service';

describe('Service: DeviceField', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceFieldService]
    });
  });

  it('should ...', inject([DeviceFieldService], (service: DeviceFieldService) => {
    expect(service).toBeTruthy();
  }));
});
