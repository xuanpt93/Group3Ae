import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html' ,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer_top:any[]=[
    {
      id: 1,
      img: 'assets/img/img-home/01.png'
    },
    {
      id: 2,
      img: 'assets/img/img-home/02.png'
    },
    {
      id: 3,
      img: 'assets/img/img-home/03.png'
    },
    {
      id: 4,
      img: 'assets/img/img-home/04.png'
    },
    {
      id: 5,
      img: 'assets/img/img-home/05.png'
    },
    {
      id: 6,
      img: 'assets/img/img-home/06.png'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
