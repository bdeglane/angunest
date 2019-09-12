import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthValidGuard } from './is-auth-valid.guard';

describe('IsAuthValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthValidGuard]
    });
  });

  it('should ...', inject([IsAuthValidGuard], (guard: IsAuthValidGuard) => {
    expect(guard).toBeTruthy();
  }));
});
