import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeFieldCanvasComponent } from './playe-field-canvas.component';

describe('PlayeFieldCanvasComponent', () => {
  let component: PlayeFieldCanvasComponent;
  let fixture: ComponentFixture<PlayeFieldCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeFieldCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeFieldCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
