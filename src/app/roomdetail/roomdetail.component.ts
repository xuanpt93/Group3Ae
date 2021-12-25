import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { HomeService } from '../services/home.service';
import { RoomDetailService } from '../services/room-detail.service';
import { RoomGribService } from '../services/room-grib.service';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {

  @Output() clickBuy: EventEmitter<any> = new EventEmitter();
data: any[] = [];
data2: any[] = [
  {id: 1, name: 'Nightly',price: '525'},
  {id: 2, name: 'Weekends(Sat_sun):',price: '525'},
  {id: 3, name: 'Weddkly(7d+):',price: '525'},
  {id: 4, name: 'Monthly(30d+):',price: '525'},
  {id: 5, name: 'Security Deposit:',price: '525'},
  {id: 6, name: 'Additional Guests:',price: '525'},
  {id: 7, name: 'Additional Guests:',price: '525'},
  {id: 8, name: 'Cleaning Fee:',price: '525'},
  {id: 9, name: 'Per Stay',price: '525'},
  {id: 10, name: 'City Fee:',price: '525'},
  {id: 11, name: 'Minimun Nember Of Days:',price: '525'},
  {id: 12, name: 'Minimun Nember Of Days:',price: '525'},

]
data1:any;
  constructor(private roomSever: RoomGribService,
    private router: ActivatedRoute,
    private roomDetail: RoomDetailService,
    private homeService: HomeService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.load();
    this.loadDitail();
    this.roomSever.findId(id).subscribe(res => this.data1 = res);
    this.homeService.findId(id).subscribe(res => this.data1 = res);

  }
  eventEmitter (id: number): void{
    this.clickBuy.emit(id);
  }

load(){
  this.roomSever.getFormApi('http://localhost:3000/rooom').subscribe(xuanpham => {
    this.data = xuanpham;
  })

}
loadDitail(){
  this.roomDetail.getFormApi('http://localhost:3000/roomDetail').subscribe(respon => {
    this.data = respon;
  })
}

eventEmmit(id: number): void {
  this.clickBuy.emit(id);
}
buy(rooom: any){
  // lấy dữ liệu từ giỏ hàng trong storage

  let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
    carts.push(rooom);
    // lưu giỏ hàng vào storage
    localStorage.setItem('carts', JSON.stringify(carts));

    this.clickBuy.emit();
}

}

