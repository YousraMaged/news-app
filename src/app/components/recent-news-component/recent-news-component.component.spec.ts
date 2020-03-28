import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNewsComponentComponent } from './recent-news-component.component';

describe('RecentNewsComponentComponent', () => {
  let component: RecentNewsComponentComponent;
  let fixture: ComponentFixture<RecentNewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentNewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
