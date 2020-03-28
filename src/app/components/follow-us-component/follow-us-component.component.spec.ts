import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsComponentComponent } from './follow-us-component.component';

describe('FollowUsComponentComponent', () => {
  let component: FollowUsComponentComponent;
  let fixture: ComponentFixture<FollowUsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
