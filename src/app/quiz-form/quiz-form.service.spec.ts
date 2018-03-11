import { TestBed, inject } from '@angular/core/testing';

import { QuizFormService } from './quiz-form.service';

describe('QuizFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizFormService]
    });
  });

  it('should be created', inject([QuizFormService], (service: QuizFormService) => {
    expect(service).toBeTruthy();
  }));
});
