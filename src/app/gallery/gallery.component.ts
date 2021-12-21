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
 { id: 1, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (1).jpg',},
 { id: 2, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (2).jpg',},
 { id: 3, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (3).jpg',},
 { id: 4, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (4).jpg',},
 { id: 5, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (5).jpg',},
 { id: 6, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (6).jpg',},
 { id: 7, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (7).jpg',},
 { id: 8, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (8).jpg',},
 { id: 9, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (9).jpg',},
 { id: 10, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (10).jpg',},
 { id: 11, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (11).jpg',},
 { id: 12, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (12).jpg',},
 { id: 13, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (13).jpg',},
 { id: 14, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (14).jpg',},
 { id: 15, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (15).jpg',},
 { id: 16, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (16).jpg',},
 { id: 17, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (17).jpg',},
 { id: 18, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (18).jpg',},
 { id: 19, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (19).jpg',},
 { id: 20, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (20).jpg',},
 { id: 21, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (21).jpg',},
 { id: 22, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (22).jpg',},
 { id: 23, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (23).jpg',},
 { id: 24, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (24).jpg',},
 { id: 25, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (15).jpg',},
 { id: 26, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (26).jpg',},
 { id: 27, name: 'Luxuery Hotel', image1: 'assets/img/img/1 (27).jpg',},
]
pageData: any[] =[];
pageSize: number = 9;
totalpage: number = 0;
currentPage: number = 1;
pages: any[] = [];
  constructor(private route:ActivatedRoute, private gallerySerive: GalleryService) { }

  ngOnInit(): void {
    // this.load();
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
