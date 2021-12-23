import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { RoomdetailModule } from './roomdetail/roomdetail.module';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { RoomGridComponent } from './room-grid/room-grid.component';
import { BlogdetailModule } from './blogdetail/blogdetail.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'home/:id',component: RoomdetailComponent},
  {path:'galley', component:  GalleryComponent},
  {path:'blogdetail',component: BlogdetailComponent},
  {path:'about-us',component: AboutUsComponent},
  {path:'blog-grid',component: BlogGridComponent},
  {path:'blog-grid/:id',component: BlogdetailComponent},
  {path:'room-grid',component: RoomGridComponent},
  {path:'room-grid/:id',component: RoomdetailComponent},
  {path: 'checkout', component: CheckoutComponent,
  canActivate: [AuthGuardService]},
  // {path: 'products', loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)}
  {path: 'room-grid', loadChildren:() => import('./room-grid/room-grid.component').then(m=>m.RoomGridComponent)},
  {path: 'add', component: AddComponent },
  {path: 'login', component: LoginComponent},
  {path: 'regitser', component:RegistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
