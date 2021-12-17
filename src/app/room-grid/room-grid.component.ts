import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomGribService } from '../services/room-grib.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {
  @Output() clickBuy: EventEmitter<any> = new EventEmitter()

  data:any[]=[];

  constructor( private roomServer: RoomGribService) { }

  ngOnInit(): void {
    this.load();
  }
  eventEmmit(id: number): void {
    this.clickBuy.emit(id)
  }
  load(){
    // this.data = this.proServices.get();
    this.roomServer.getFormApi('http://localhost:3000/rooom').subscribe(response => {
      this.data = response;
    });
  }
  buy(rooom: any){
    // lấy dữ liệu từ giỏ hàng trong storage

    // let carts =  JSON.parse(localStorage.getItem('carts') || '[]');
    // let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
      carts.push(rooom);
      // lưu giỏ hàng vào storage
      localStorage.setItem('carts', JSON.stringify(carts));

      this.clickBuy.emit();
  }
}
