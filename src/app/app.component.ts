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
  carts: any[] = [
    // {id: ɵgetNgModuleById__POST_R3__, quatity: soluong}
  ];
  title = 'Teamplate7';



  onActivate(componentRef:any){
    if(componentRef instanceof RoomGridComponent){
      componentRef.clickBuy.subscribe(() =>{
        this.number ++;
      });
    }

  }
}
