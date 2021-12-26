import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomGribService } from '../services/room-grib.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() countShopping: number = 0;
  @Input() data:any [] = [];

  constructor(private user: UserService, private rout:Router,private roomserver: RoomGribService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cleareLogin();
    // this.loadCart();
  }
 cleareLogin(){
  sessionStorage.clear();
  this.rout.navigate(['home']);
 }
//  loadCart (){
//   this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
// }
}
