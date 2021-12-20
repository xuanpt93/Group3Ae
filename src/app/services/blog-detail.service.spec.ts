import { TestBed } from '@angular/core/testing';

import { BlogDetailService } from './blog-detail.service';

describe('BlogDetailService', () => {
  let service: BlogDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
