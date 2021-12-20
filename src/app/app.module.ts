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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddComponent } from './add/add.component';
import { RoomGribService } from './services/room-grib.service';
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
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    // ProductsService
    RoomGribService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
