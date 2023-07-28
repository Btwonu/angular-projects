import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTabComponent } from './team-tab.component';

describe('TeamTabComponent', () => {
  let component: TeamTabComponent;
  let fixture: ComponentFixture<TeamTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamTabComponent]
    });
    fixture = TestBed.createComponent(TeamTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
