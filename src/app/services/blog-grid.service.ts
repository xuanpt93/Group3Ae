import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogGridService {
  data: any[] = [];
  constructor(private http: HttpClient) { }
   getFormApi(url:string):Observable<any>{
     return this.http.get(url);
   }
<<<<<<< HEAD

  // post(url: string, item:any):Observable<any>{
  //   return this.http.post(url,item);
  // }
  // put(url: string, item:any):Observable<any>{
  //   return this.http.put(url,item);
  // }
  // delete(url: string):Observable<any>{
  //   return this.http.delete(url);
  // }
=======
  post(url: string, item:any):Observable<any>{
    return this.http.post(url,item);
  }
  put(url: string, item:any):Observable<any>{
    return this.http.put(url,item);
  }
  delete(url: string):Observable<any>{
    return this.http.delete(url);
  }
>>>>>>> b7fd3cba31df2caf751a34fd927101348437e33f

  // get(){
  //   return this.data;
  // }
  // add(item:any):void{
  //   this.data.push(item);
  // }
  // find(predicate: (value: any, item:number, obj: any[])=>unknown){
  //   this.data.find(predicate);
  // }
  // edit(idx:number, item:any):void{
  //   this.data.fill(item,idx,idx+1);
  // }
  // remove(idx:number):void{
  //   this.data.splice(idx,1);
  // }
  /*chitiet*/
  getall(): Observable<any>{
    return this.http.get('http://localhost:3000/blog');
  }
  findId(id: number): Observable<any>{
    return this.http.get('http://localhost:3000/blog/'+id);
  }
}
