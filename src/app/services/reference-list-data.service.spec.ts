/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferenceListDataService } from './reference-list-data.service';

describe('Service: ReferenceListData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceListDataService]
    });
  });

  it('should ...', inject([ReferenceListDataService], (service: ReferenceListDataService) => {
    expect(service).toBeTruthy();
  }));
});
