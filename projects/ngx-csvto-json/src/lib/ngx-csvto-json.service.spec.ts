import { TestBed } from '@angular/core/testing';

import { NgxCSVtoJSONService } from './ngx-csvto-json.service';

describe('NgxCSVtoJSONService', () => {
  let service: NgxCSVtoJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCSVtoJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
