import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmControlFormComponent } from './utm-control-form.component';

describe('UtmControlFormComponent', () => {
  let component: UtmControlFormComponent;
  let fixture: ComponentFixture<UtmControlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtmControlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
