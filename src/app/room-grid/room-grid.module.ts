import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomgridEditComponent } from './roomgrid-edit/roomgrid-edit.component';
import { RoomgridCreateComponent } from './roomgrid-create/roomgrid-create.component';
import { ProductsService } from '../services/products.service';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

]

@NgModule({
  declarations: [
    RoomgridEditComponent,
    RoomgridCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ProductsService
  ]
})
export class RoomGridModule { }
