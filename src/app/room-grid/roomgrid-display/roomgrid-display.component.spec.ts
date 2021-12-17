import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomgridDisplayComponent } from './roomgrid-display.component';

describe('RoomgridDisplayComponent', () => {
  let component: RoomgridDisplayComponent;
  let fixture: ComponentFixture<RoomgridDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomgridDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomgridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
