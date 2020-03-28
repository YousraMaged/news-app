import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInteractionsComponent } from './news-interactions-component.component';

describe('NewsInteractionsComponent', () => {
  let component: NewsInteractionsComponent;
  let fixture: ComponentFixture<NewsInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
