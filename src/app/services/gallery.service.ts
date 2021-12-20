import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
data: any[] = [];
  constructor(private http: HttpClient) { }
  getFormApi(url:string):Observable<any>{
    return this.http.get(url);
  }

}
