import { TestBed } from '@angular/core/testing';

import { NgSharedService } from './ng-shared.service';

describe('NgSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSharedService = TestBed.get(NgSharedService);
    expect(service).toBeTruthy();
  });
});
