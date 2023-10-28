import { TestBed } from '@angular/core/testing';

import { DataassetsService } from './dataassets.service';

describe('DataassetsService', () => {
  let service: DataassetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataassetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
