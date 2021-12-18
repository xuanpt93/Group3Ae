import { Component, Input } from '@angular/core';
import { RoomGridComponent } from './room-grid/room-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countShopping: number = 0;
  number: number = 0;
  dataCarts: any []= [];
  carts: any[] = [];
  title = 'Teamplate7';



  onActivate(componentRef:any){
    if(componentRef instanceof RoomGridComponent){
      componentRef.clickBuy.subscribe(() =>{
        this.dataCarts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '[]') : [];
        this.number ++;
      });
    }

  }
}
