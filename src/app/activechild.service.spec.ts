import { TestBed } from '@angular/core/testing';

import { ActivechildService } from './activechild.service';

describe('ActivechildService', () => {
  let service: ActivechildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivechildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
