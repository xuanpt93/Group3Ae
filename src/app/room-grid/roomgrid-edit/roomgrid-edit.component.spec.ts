import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomgridEditComponent } from './roomgrid-edit.component';

describe('RoomgridEditComponent', () => {
  let component: RoomgridEditComponent;
  let fixture: ComponentFixture<RoomgridEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomgridEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomgridEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
