import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiContentComponent } from './wiki-content.component';

describe('WikiContentComponent', () => {
  let component: WikiContentComponent;
  let fixture: ComponentFixture<WikiContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
