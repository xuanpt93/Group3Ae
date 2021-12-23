import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() countShopping: number = 0;
  @Input() data: any [] = [];

  constructor(private user: UserService, private rout:Router) { }

  ngOnInit(): void {
    this.cleareLogin();
  }
 cleareLogin(){
  sessionStorage.clear();
  this.rout.navigate(['home']);
 }
}
