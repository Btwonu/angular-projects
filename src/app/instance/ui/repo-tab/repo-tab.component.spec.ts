import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTabComponent } from './repo-tab.component';

describe('RepoTabComponent', () => {
  let component: RepoTabComponent;
  let fixture: ComponentFixture<RepoTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoTabComponent]
    });
    fixture = TestBed.createComponent(RepoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
