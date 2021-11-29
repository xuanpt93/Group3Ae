import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {
  roomgrids:any[]=[
    {
      id:1,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:2,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:3,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:4,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:5,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:6,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:7,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:8,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
    {
      id:9,
      Image:'assets/img/img/download.jpeg',
      name:'Modern Guest Rooms',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor iure expedita architecto',
      price:'180.00'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
