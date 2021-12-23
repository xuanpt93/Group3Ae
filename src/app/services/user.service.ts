import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 data:any[] = [];
  getUser(username: string, password: string):Observable<any>{
    return this.http.get(`http://localhost:3000/login?username=${username}&password=${password}`);
  } 
  register(username: string, password: string):Observable<any>{
    return this.http.post(`http://localhost:3000/login`,{username: username, password: password})
  }
  remove(idx: number):void{
    this.data.splice(idx,1);
  }
}
