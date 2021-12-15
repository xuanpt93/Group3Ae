import { TestBed } from '@angular/core/testing';

import { RoomGribService } from './room-grib.service';

describe('RoomGribService', () => {
  let service: RoomGribService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomGribService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
