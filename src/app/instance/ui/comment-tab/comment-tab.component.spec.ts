import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTabComponent } from './comment-tab.component';

describe('CommentTabComponent', () => {
  let component: CommentTabComponent;
  let fixture: ComponentFixture<CommentTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentTabComponent]
    });
    fixture = TestBed.createComponent(CommentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
