import { TestBed } from '@angular/core/testing';

import { ArticleRepositoryService } from './article-repository.service';

describe('ArticleRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleRepositoryService = TestBed.get(ArticleRepositoryService);
    expect(service).toBeTruthy();
  });
});
