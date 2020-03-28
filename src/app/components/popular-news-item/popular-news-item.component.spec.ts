import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNewsItemComponent } from './popular-news-item.component';

describe('PopularNewsItemComponent', () => {
  let component: PopularNewsItemComponent;
  let fixture: ComponentFixture<PopularNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
