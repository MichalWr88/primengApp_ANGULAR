import { TestBed, inject } from '@angular/core/testing';

import { ModulFormsService } from './modul-forms.service';

describe('ModulFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ModulFormsService] });
  });

  it('should be created', inject(
      [ModulFormsService],
      (service: ModulFormsService) => {
        expect(service).toBeTruthy();
      }
    ));
});
