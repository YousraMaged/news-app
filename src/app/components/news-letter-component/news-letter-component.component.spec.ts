import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterComponentComponent } from './news-letter-component.component';

describe('NewsLetterComponentComponent', () => {
  let component: NewsLetterComponentComponent;
  let fixture: ComponentFixture<NewsLetterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
