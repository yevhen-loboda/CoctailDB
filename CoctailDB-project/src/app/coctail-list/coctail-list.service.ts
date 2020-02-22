import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctailListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get (url:string, params?:any): Observable<any> {
    const queryParams = { params: params };
    return this.httpClient.get<any>(url, queryParams)
   }

  getFiltersList(){
    let param = {
      c: "list"
    }
    return  this.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?', param)
    }

  getCoctailsList(filter){
    let param = {
      c: filter
    }
    return  this.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?', param)
  }
}
