import { TestBed, inject } from '@angular/core/testing';

import { ModulDataService } from './modul-data.service';

describe('ModulDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulDataService]
    });
  });

  it('should be created', inject([ModulDataService], (service: ModulDataService) => {
    expect(service).toBeTruthy();
  }));
});
