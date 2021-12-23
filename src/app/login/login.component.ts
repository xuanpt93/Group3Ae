import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// user: string = '';
// password: string ='';
fgLogin: FormGroup = this.fb.group({
  user: ['',Validators.required],
  password: ['',[ Validators.required, Validators.minLength(4)]]
})

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }
  login(){

    this.userService.getUser(this.fgLogin.get('user')?.value, this.fgLogin.get('password')?.value).subscribe(res => {
      if(res.length > 0){
        sessionStorage.setItem('user', this.fgLogin.get('user')?.value);
        this.router.navigate(['checkout']);
        alert('Đăng nhập thành công!');
      }
    })
  }
  
  cleareLogin(){
    sessionStorage.clear();
    this.router.navigate(['home']);
   }
  // login(){
  //   this.userService.getUser(this.user, this.password).subscribe( res => {
  //     if(res.length > 0){
  //       sessionStorage.setItem('user',this.user);
  //       this.router.navigate(['room-grid']);
  //       alert('Đăng nhập thành công!')
  //     }
  //     else{
  //       alert('Sai tên đăng nhập mật khẩu!');
  //     }
  //   })
  //   // if(this.user =="admin" && this.password =="admin"){
  //   //   sessionStorage.setItem('user',this.user);
  //   //   this.router.navigate(['room-grid']);
  //   //   alert('Đăng nhập thành công!')
  //   // }else{
  //   //   alert('Sai tên đăng nhập mật khẩu!');
  //   // }
  // }
}
