import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFieldCanvasComponent } from './play-field-canvas.component';

describe('PlayFieldCanvasComponent', () => {
  let component: PlayFieldCanvasComponent;
  let fixture: ComponentFixture<PlayFieldCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayFieldCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFieldCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
