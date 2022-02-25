import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
