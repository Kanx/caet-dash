import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoomsayerComponent } from './doomsayer.component';

describe('DoomsayerComponent', () => {
  let component: DoomsayerComponent;
  let fixture: ComponentFixture<DoomsayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoomsayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoomsayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
