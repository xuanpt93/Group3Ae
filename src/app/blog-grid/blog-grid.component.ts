import { Component, OnInit } from '@angular/core';
import { BlogGridService } from '../services/blog-grid.service';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {
  pageData: any[] =[];
pageSize: number = 9;
totalpage: number = 0;
currentPage: number = 1;
pages: any[] = [];
  data:any[]= [];
  constructor(private blogService: BlogGridService) { }

  ngOnInit(): void {
    this.load();
  }
load(){
  this.blogService.getFormApi('http://localhost:3000/blog').subscribe(xuanpham=>{
    this.data = xuanpham;
    this.loadPaginate(1);
  });
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
