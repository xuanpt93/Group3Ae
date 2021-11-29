import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html' ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
        img: 'assets/img/img-home/icon2.png'
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
  constructor() { }

  ngOnInit(): void {
  }

}
