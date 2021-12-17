import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomgridEditComponent } from './roomgrid-edit/roomgrid-edit.component';
import { RoomgridCreateComponent } from './roomgrid-create/roomgrid-create.component';
import { RouterModule, Routes } from '@angular/router';
import { RoomgridDisplayComponent } from './roomgrid-display/roomgrid-display.component';

export const routes: Routes = [

]

@NgModule({
  declarations: [
    RoomgridEditComponent,
    RoomgridCreateComponent,
    RoomgridDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
  ]
})
export class RoomGridModule { }
