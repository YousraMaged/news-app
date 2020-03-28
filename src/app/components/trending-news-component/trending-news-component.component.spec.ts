import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNewsComponentComponent } from './trending-news-component.component';

describe('TrendingNewsComponentComponent', () => {
  let component: TrendingNewsComponentComponent;
  let fixture: ComponentFixture<TrendingNewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingNewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
