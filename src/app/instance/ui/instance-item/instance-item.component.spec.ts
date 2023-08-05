import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceItemComponent } from './instance-item.component';

describe('InstanceItemComponent', () => {
  let component: InstanceItemComponent;
  let fixture: ComponentFixture<InstanceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstanceItemComponent]
    });
    fixture = TestBed.createComponent(InstanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
