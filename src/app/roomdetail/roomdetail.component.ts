import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { RoomGribService } from '../services/room-grib.service';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {
  @Output() clickBuy: EventEmitter <any> = new EventEmitter();
data: any[] = [
  {
    id: 1,
    text1: 'Guest House',
   conten: 'Mdodern Guest Rooms',
   conten1: 'Avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounter',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '180.00'
  },
  {
    id: 2,
    text1: 'Guest House',
   conten: 'Conference Room',
   conten1: 'Great explorer of the truth, the master- builder of human happiness one rejects, dislikes avoids pleasure because',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '250.00'
  },
  {
    id: 3,
    text1: 'Guest House',
   conten: 'Deluxe Couple Room',
   conten1: 'Avoids pleasure itself, because pleasure, but because those who do not know how to pursue pleasure rationally encounter',
   infor: '3 Bed',
   infor1: '2 Baths',
   infor2: '72 m',
   price: '180.00'
  }
]
data1:any;
  constructor(private roomSever: RoomGribService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.load();
    this.roomSever.findId(id).subscribe(res => this.data1 = res);
  }
  eventEmitter (id: number): void{
    this.clickBuy.emit(id);
  }

load(){
  this.roomSever.getFormApi('http://localhost:3000/rooom').subscribe(xuanpham => {
    this.data = xuanpham;
  })
}
buy(rooom: any){
  // lấy dữ liệu từ giỏ hàng trong storage

  let carts = JSON.parse(localStorage.getItem('carts') || '[]');
    carts.push(rooom);
    // lưu giỏ hàng vào storage
    localStorage.setItem('carts', JSON.stringify(carts));

    this.clickBuy.emit();
}
}
