import { TestBed } from '@angular/core/testing';

import { DeleteService } from '../backend/book/services/http-delete-book.service';

describe('DeleteService', () => {
  let service: DeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
