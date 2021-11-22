import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {
  bloggrids:any[]= [
    {
      id: 1,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 2,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 3,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 4,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 5,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 6,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 7,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 8,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    },
    {
      id: 8,
      Image:'assets/img/img/download.jpeg',
      Images: 'assets/img/img/calendar-alt.png',
      Date: '20 jan 2020',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iste laudantium, a dolor',
      // button: 'Read More'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
