import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
gallays: any[] =[
  {
    id: 1,
    txt: 'Show All',
  },
  {
    id: 2,
    txt: 'Luxury',
  },
  {
    id: 3,
    txt: 'Twieen',
  },
  {
    id: 4,
    txt: 'Couple',
  },
  {
    id: 5,
    txt: 'Family',
  },
  {
    id: 6,
    txt: 'Conference',
  }
]
squares: any[]=[
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
 { id: 1,
name: 'Luxuery Hotel'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
