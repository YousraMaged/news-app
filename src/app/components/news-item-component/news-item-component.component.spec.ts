import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemComponentComponent } from './news-item-component.component';

describe('NewsItemComponentComponent', () => {
  let component: NewsItemComponentComponent;
  let fixture: ComponentFixture<NewsItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
