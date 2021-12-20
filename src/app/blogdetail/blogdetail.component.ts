import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailService } from '../services/blog-detail.service';
import { BlogGridService } from '../services/blog-grid.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  constructor(
    private blogServie: BlogGridService,
    private blogDeteil: BlogDetailService,
    private router: ActivatedRoute) { }
data: any[] = [];
data1: any;
  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.load();
    this.blogServie.findId(id).subscribe(res => this.data1 = res);
  }
load(){
  this.blogDeteil.getApi('http://localhost:3000/blogDetail').subscribe(respon=>{
    this.data = respon;
  })

}
}
