import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { RoomdetailModule } from './roomdetail/roomdetail.module';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'roomdetail', component: RoomdetailComponent},
  {path:'galley', component:  GalleryComponent},
  {path:'blog',component: BlogdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
