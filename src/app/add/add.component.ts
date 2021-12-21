import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomGribService } from '../services/room-grib.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  p: any = {
    id: 0,
    name: '',
    Image: '',
    Text: '',
    price: 0
  }

  constructor(private RoomSevice: RoomGribService, private router: Router ) { }

  ngOnInit(): void {
  }
  addPro(){
    this.RoomSevice.post('http://localhost:3000/rooom', this.p).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/room-grid']);
    })
  }
}
