import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  [x: string]: any;
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
data: any[]=[
 { id: 1, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg',},
 { id: 2, name: 'Luxuery Hotel'},
 { id: 3, name: 'Luxuery Hotel'},
 { id: 4, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
 { id: 5, name: 'Luxuery Hotel'},
 { id: 6, name: 'Luxuery Hotel'},
 { id: 7, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
 { id: 8, name: 'Luxuery Hotel'},
 { id: 9, name: 'Luxuery Hotel 1',
 image1 : 'assets/img/img/download.jpeg' },
 { id: 10,name: 'Luxuery Hotel 1'},
 { id: 11, name: 'Luxuery Hotel 1', image1: 'assets/img/img/download.jpeg'},
 { id: 12, name: 'Luxuery Hotel'},
 { id: 13, name: 'Luxuery Hotel'},
 { id: 14, name: 'Luxuery Hotel'},
 { id: 15, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
 { id: 16, name: 'Luxuery Hotel'},
 { id: 17, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
 { id: 18, name: 'Luxuery Hotel'},
 { id: 19, name: 'Luxuery Hotel 2', image1: 'assets/img/img/download.jpeg'},
 { id: 20,name: 'Luxuery Hotel 3'},
 { id: 21, name: 'Luxuery Hotel 2', image1: 'assets/img/img/download.jpeg'},
 { id: 22, name: 'Luxuery Hotel'},
 { id: 23, name: 'Luxuery Hotel'},
 { id: 24, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
 { id: 25, name: 'Luxuery Hotel 5'},
 { id: 26, name: 'Luxuery Hotel'},
 { id: 27, name: 'Luxuery Hotel', image1: 'assets/img/img/download.jpeg'},
]
pageData: any[] =[];
pageSize: number = 9;
totalpage: number = 0;
currentPage: number = 1;
pages: any[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPaginate(1);
  }

  loadPaginate(page: number){
    this.totalpage = Math.ceil(this.data.length / this.pageSize);
    this.pages = new Array(this.totalpage);
    let start = (page - 1)* this.pageSize;
    let end = start + this.pageSize;
    this.pageData = this.data.slice(start, end);
    this.currentPage = page;
  }
  prepage():void{
    this.currentPage--;
    this.loadPaginate(this.currentPage);
  }
  nextpage():void{
    this.currentPage++;
    this.loadPaginate(this.currentPage);
  }
}
