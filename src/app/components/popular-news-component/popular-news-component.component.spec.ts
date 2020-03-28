import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNewsComponentComponent } from './popular-news-component.component';

describe('PopularNewsComponentComponent', () => {
  let component: PopularNewsComponentComponent;
  let fixture: ComponentFixture<PopularNewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularNewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
