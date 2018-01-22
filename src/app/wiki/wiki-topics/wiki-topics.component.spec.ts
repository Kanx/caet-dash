import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiTopicsComponent } from './wiki-topics.component';

describe('WikiTopicsComponent', () => {
  let component: WikiTopicsComponent;
  let fixture: ComponentFixture<WikiTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
