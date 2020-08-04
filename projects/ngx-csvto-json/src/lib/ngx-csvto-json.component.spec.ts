import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCSVtoJSONComponent } from './ngx-csvto-json.component';

describe('NgxCSVtoJSONComponent', () => {
  let component: NgxCSVtoJSONComponent;
  let fixture: ComponentFixture<NgxCSVtoJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCSVtoJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCSVtoJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
