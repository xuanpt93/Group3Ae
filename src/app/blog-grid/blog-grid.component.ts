import { Component, OnInit } from '@angular/core';
import { BlogGridService } from '../services/blog-grid.service';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {
  data:any[]= [];
  constructor(private blogService: BlogGridService) { }

  ngOnInit(): void {
    this.load();
  }
load(){
  this.blogService.getFormApi('http://localhost:3000/blog').subscribe(xuanpham=>{
    this.data = xuanpham;
  });
}
}
