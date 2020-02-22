import { TestBed } from '@angular/core/testing';

import { CoctailListService } from './coctail-list.service';

describe('CoctailListService', () => {
  let service: CoctailListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctailListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
