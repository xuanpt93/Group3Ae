import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RoomdetailComponent } from '../roomdetail/roomdetail.component';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() clickBuy: EventEmitter<any> = new EventEmitter();
  content3:any[]=[
      {
        id: 1,
        img: 'assets/img/img-home/icon0.png'
      },
      {
        id: 2,
        img: 'assets/img/img-home/icon1.png'
      },
      {
        id: 3,
        img: 'assets/img/img-home/Icon5.png'
      },
      {
        id: 4,
        img: 'assets/img/img-home/Icon3.png'
      },
      {
        id: 5,
        img: 'assets/img/img-home/Icom.png'
      },
      {
        id: 6,
        img: 'assets/img/img-home/Icon copy.png'
      }
  ]
  data: any[]=[];
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.load();
  }
  load(){
    this.homeService.getFormApi('http://localhost:3000/home').subscribe(dung=>{
      this.data = dung;
    });
  }
    buy(home:any){
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
    carts.push(home);
      localStorage.setItem('carts', JSON.stringify(carts));
      this.clickBuy.emit();
  }

}
