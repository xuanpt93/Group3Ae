import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data: any []= [];
  constructor() { }

  ngOnInit(): void {
    this.loadCart();
  }
loadCart (){
  this.data = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
}
}
