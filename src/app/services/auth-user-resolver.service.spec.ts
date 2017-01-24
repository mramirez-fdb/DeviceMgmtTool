/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthUserResolverService } from './auth-user-resolver.service';

describe('Service: AuthUserResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthUserResolverService]
    });
  });

  it('should ...', inject([AuthUserResolverService], (service: AuthUserResolverService) => {
    expect(service).toBeTruthy();
  }));
});
