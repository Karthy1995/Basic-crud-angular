import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface WebApiTab1{
  Id:number;
  Name:string;
  Age:number;
  Mark:number;
}
const endpoint='http://localhost:52730/api/WebAPI/';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  addWebApiTab(product:any):Observable<any>
  {
  return this.http.post(endpoint+'postwebapitab',product)
}
getAllWebApiTabs():Observable<any>{
  return this.http.get<WebApiTab1>(endpoint+'getwebapitabs');
}
getWebApiTab(id:number):Observable<any>{
  return this.http.get<WebApiTab1>(endpoint+'getwebapitab/'+id)
}
deleteWebApiTab(id:number):Observable<any>{
  return this.http.delete<WebApiTab1>(endpoint+'deletewebapitab/'+id)
}
putWebApiTab(id:number,product:any):Observable<any>{
  return this.http.put<WebApiTab1>(endpoint+'putwebapitab/'+id,product)
}
}
