import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { RoomGridComponent } from './room-grid/room-grid.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { RoomGribService } from './services/room-grib.service';
import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    RoomdetailComponent,
    GalleryComponent,
    BlogdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    BlogGridComponent,
    RoomGridComponent,
    CheckoutComponent,
    LoginComponent,
    RegistryComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // formGroup là compoentn của Module này rồi, thêm Module này là đc
    //FormGroup, // Ko phải module, ko được thêm ở đây
    HttpClientModule,
    CommonModule

  ],
  providers: [
    // ProductsService
    RoomGribService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
