import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPicksComponentComponent } from './editor-picks-component.component';

describe('EditorPicksComponentComponent', () => {
  let component: EditorPicksComponentComponent;
  let fixture: ComponentFixture<EditorPicksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPicksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPicksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
