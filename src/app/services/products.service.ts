import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data: any[] = [
    {id:1 , name: 'tivi' , price:123},
    {id:2 , name: 'tủ lạnh' , price:123},
    {id:3 , name: 'máy giặt ' , price:123},
    {id:4 , name: 'điều hòa' , price:123},
    {id:5 , name: 'máy bơm' , price:123},
  ];

  constructor(private http: HttpClient) { }
  getFormApi(url: string): Observable<any>{
    return this.http.get(url);
  }
  post(url: string, item:any): Observable<any>{
    return this.http.post(url, item);
  }
  put(url:string, item:any): Observable<any> {
    return this.http.put(url, item);

  }
  delete(url:string): Observable<any> {
    return this.http.delete(url);
  }

  get (){
    return this.data;
  }
  add(item: any): void{
    this.data.push(item);
  }
  find(predicate: (value: any, index: number, obj: any[]) => unknown){
    return this.data.find(predicate);
  }
  findIndex(predicate: (value: any, index: number, obj: any[]) => unknown){
    this.data.findIndex(predicate);
  }
  edit(idx: number, item:any): void{
    this.data.fill(item, idx, idx+1);
  }
  remove(idx: number): void{
    this.data.splice(idx,1);
  }
}
