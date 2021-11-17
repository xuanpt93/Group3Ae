import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { RoomdetailModule } from './roomdetail/roomdetail.module';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'roomdetail', component: RoomdetailComponent},
  {path:'galley', component:  GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
