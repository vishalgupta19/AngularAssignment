import { TestBed } from '@angular/core/testing';

import { PostsServiceApiService } from './posts-service-api.service';

describe('PostsServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsServiceApiService = TestBed.get(PostsServiceApiService);
    expect(service).toBeTruthy();
  });
});
