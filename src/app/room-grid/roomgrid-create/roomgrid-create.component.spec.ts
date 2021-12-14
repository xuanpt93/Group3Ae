import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomgridCreateComponent } from './roomgrid-create.component';

describe('RoomgridCreateComponent', () => {
  let component: RoomgridCreateComponent;
  let fixture: ComponentFixture<RoomgridCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomgridCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomgridCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
