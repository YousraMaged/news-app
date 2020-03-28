import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInteractionsComponentComponent } from './news-interactions-component.component';

describe('NewsInteractionsComponentComponent', () => {
  let component: NewsInteractionsComponentComponent;
  let fixture: ComponentFixture<NewsInteractionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInteractionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInteractionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
