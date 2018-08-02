import { TestBed, async } from '@angular/core/testing';
import { SharepointService } from './sharepoint.service';

describe('SharepointService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SharepointService
      ],
    }).compileComponents();
  }));
  it('should get list items', async(() => {
    const fixture = TestBed.createComponent(SharepointService);
    const service = fixture.debugElement.componentInstance;

    service.getListItems();
  }));
});
