import { TestBed } from '@angular/core/testing';

import { RoomDetailService } from './room-detail.service';

describe('RoomDetailService', () => {
  let service: RoomDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
