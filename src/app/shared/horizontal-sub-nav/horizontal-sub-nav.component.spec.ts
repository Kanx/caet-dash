import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSubNavComponent } from './horizontal-sub-nav.component';

describe('HorizontalSubNavComponent', () => {
  let component: HorizontalSubNavComponent;
  let fixture: ComponentFixture<HorizontalSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
