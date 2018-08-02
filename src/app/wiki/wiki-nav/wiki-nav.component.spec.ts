import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNavComponent } from './wiki-nav.component';

describe('WikiNavComponent', () => {
  let component: WikiNavComponent;
  let fixture: ComponentFixture<WikiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
