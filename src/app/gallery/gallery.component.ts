import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryService } from '../services/gallery.service';

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
 data: any[]=[
//  { id: 1, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (1).jpg', titile: 'luxury'},
//  { id: 2, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (2).jpg', titile: 'luxury'},
//  { id: 3, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (3).jpg', titile: 'luxury'},
//  { id: 4, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (4).jpg', titile: 'luxury'},
//  { id: 5, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (5).jpg', titile: 'luxury'},
//  { id: 6, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (6).jpg', titile: 'luxury'},
//  { id: 7, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (7).jpg', titile: 'luxury'},
//  { id: 8, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (8).jpg', titile: 'luxury'},
//  { id: 9, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (9).jpg', titile: 'luxury'},
//  { id: 10, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (10).jpg', titile: 'Twieen'},
//  { id: 11, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (11).jpg', titile: 'Twieen'},
//  { id: 12, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (12).jpg', titile: 'Twieen'},
//  { id: 13, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (13).jpg', titile: 'Twieen'},
//  { id: 14, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (14).jpg', titile: 'Twieen'},
//  { id: 15, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (15).jpg', titile: 'Twieen'},
//  { id: 16, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (16).jpg', titile: 'Couple'},
//  { id: 17, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (17).jpg', titile: 'Couple'},
//  { id: 18, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (18).jpg', titile: 'Couple'},
//  { id: 19, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (19).jpg', titile: 'Couple'},
//  { id: 20, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (20).jpg', titile: 'Couple'},
//  { id: 21, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (21).jpg', titile: 'Couple'},
//  { id: 22, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (22).jpg',  titile: 'Family'},
//  { id: 23, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (23).jpg',  titile: 'Family'},
//  { id: 24, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (24).jpg', titile: 'Family'},
//  { id: 25, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (15).jpg', titile: 'conference'},
//  { id: 26, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (26).jpg', titile: 'conference'},
//  { id: 27, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (27).jpg', titile: 'conference'},
]
pageData: any[] =[];
pageSize: number = 9;
totalpage: number = 0;
currentPage: number = 1;
pages: any[] = [];
  constructor(private route:ActivatedRoute, private gallerySerive: GalleryService) { }

  ngOnInit(): void {
    this.load();
  }
  load(){

    this.gallerySerive.getFormApi('http://localhost:3000/gallery').subscribe(res => {
      this.data = res;
      this.loadPaginate(1);
    })
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
findLuxury(){
  const result = this.data.filter(p => p.includes('titile'));
}
}
