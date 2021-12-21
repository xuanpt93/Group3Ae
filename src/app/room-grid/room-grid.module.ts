import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RoomGribService } from '../services/room-grib.service';
import { RoomGridComponent } from './room-grid.component';

export const routes: Routes = [

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    RoomGribService
  ]
})
export class RoomGridModule { }
