import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemHeaderComponent } from './news-item-header.component';

describe('NewsItemHeaderComponent', () => {
  let component: NewsItemHeaderComponent;
  let fixture: ComponentFixture<NewsItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
