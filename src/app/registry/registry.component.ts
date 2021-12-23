import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
// user: string ='';
// password: string= '';
fgRegistry: FormGroup = this.fb.group({
 user: ['',Validators.required],
 password: ['',[Validators.required, Validators.minLength(5)]]
})
  constructor(
    private regis: UserService,
    private fb: FormBuilder,
    private router: Router
     ) { }

  ngOnInit(): void {
  }
  register(){
    this.regis.register(this.fgRegistry.get('user')?.value,this.fgRegistry.get('password')?.value).subscribe(res => {
      if(res != null){
        this.router.navigate(['login']);
        alert('Đăng ký thành công');
      }
    })
    // this.regis.register(this.user, this.password).subscribe(res =>{
    //   if(res != null){
    //     this.router.navigate(['login']);
    //     alert('Đăng ký thành công');
    //   }
    // })
  }
}
