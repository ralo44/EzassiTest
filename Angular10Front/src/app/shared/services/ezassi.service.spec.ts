import { TestBed } from '@angular/core/testing';

import { EzassiService } from './ezassi.service';

describe('EzassiService', () => {
  let service: EzassiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzassiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
