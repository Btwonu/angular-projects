import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTabComponent } from './detail-tab.component';

describe('DetailTabComponent', () => {
  let component: DetailTabComponent;
  let fixture: ComponentFixture<DetailTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTabComponent]
    });
    fixture = TestBed.createComponent(DetailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
