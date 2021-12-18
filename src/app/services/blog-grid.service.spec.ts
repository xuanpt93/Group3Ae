import { TestBed } from '@angular/core/testing';

import { BlogGridService } from './blog-grid.service';

describe('BlogGridService', () => {
  let service: BlogGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
