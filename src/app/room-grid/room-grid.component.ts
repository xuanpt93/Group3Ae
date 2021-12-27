import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RoomGribService } from '../services/room-grib.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {

  @Output() clickBuy: EventEmitter<any> = new EventEmitter();
  carts:any [] = [];
  data:any[]=[];
  pageSize: number= 9 ;
  totalPage: number =0;
  currentPage: number =1;
  pages: any [] = [];
  pageData: any[] = [];
  constructor( private roomServer: RoomGribService, private route: Router) { }

  ngOnInit(): void {
    this.load();
  }
  load(){
    // this.data = this.proServices.get();
    this.roomServer.getFormApi('http://localhost:3000/rooom').subscribe(response => {
      this.data = response;
      this.loadPaginate(1);
    });
  }
  // buy(rooom: any){

  //   this.carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
  //     const itemcart ={
  //       rooom: rooom,
  //       quantity :1
  //     };

  //     // kiểm tra xem có sản phẩm nào trong giỏ hay chưa
  //     let flag = false;
  //    this.carts.map(x => {
  //       if(x.rooom.id == rooom.id){
  //         x.quantity += 1;
  //         flag= true;
  //       }
  //       return x;
  //     })
  //     if(!flag){
  //       this.carts.push(itemcart,rooom);

  //     }
  //     // lưu giỏ hàng vào storage
  //     localStorage.setItem('carts', JSON.stringify(this.carts));
  //     this.clickBuy.emit();
  // }
  buy(rooom:any){
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
    carts.push(rooom);
      localStorage.setItem('carts', JSON.stringify(carts));
      this.clickBuy.emit();
  }
  loadPaginate(page: number){
    // tính tổng số trang
    this.totalPage = Math.ceil(this.data.length / this.pageSize);
    this.pages = new  Array(this.totalPage);
    // lấy ra số bản ghi của trang hiện tại
    let start = (page - 1)* this.pageSize;
    let end = start + this.pageSize;
    this.pageData= this.data.slice(start, end);
    this.currentPage = page;
  }
  prevpage(): void {
    this.currentPage --;
    this.loadPaginate(this.currentPage);
  }
  nextpage(): void {
    this.currentPage++;
    this.loadPaginate(this.currentPage);
  }

}
