import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {
roomdetails: any[] = [
  {
    id: 1,
    text1: 'Guest House',
   conten: 'Mdodern Guest Rooms',
   conten1: 'Avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounter',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '180.00'
  },
  {
    id: 2,
    text1: 'Guest House',
   conten: 'Conference Room',
   conten1: 'Great explorer of the truth, the master- builder of human happiness one rejects, dislikes avoids pleasure because',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '250.00'
  },
  {
    id: 3,
    text1: 'Guest House',
   conten: 'Deluxe Couple Room',
   conten1: 'Avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounter',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '180.00'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
