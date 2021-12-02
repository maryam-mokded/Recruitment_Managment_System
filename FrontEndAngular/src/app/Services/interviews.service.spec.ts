import { TestBed } from '@angular/core/testing';

import { InterviewsService } from './interviews.service';

describe('InterviewsService', () => {
  let service: InterviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
