import { TestBed } from '@angular/core/testing';

import { ColoreToolbarService } from './colore-toolbar.service';

describe('ColoreToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoreToolbarService = TestBed.get(ColoreToolbarService);
    expect(service).toBeTruthy();
  });
});
