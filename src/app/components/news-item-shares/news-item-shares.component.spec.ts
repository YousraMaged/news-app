import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemSharesComponent } from './news-item-shares.component';

describe('NewsItemSharesComponent', () => {
  let component: NewsItemSharesComponent;
  let fixture: ComponentFixture<NewsItemSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
