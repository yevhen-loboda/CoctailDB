import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get (url:string, params?:any): Observable<any> {
    const options = this.getHttpParams(params);
    return this.httpClient.get<any>(url, options)
   }

   private getHttpParams(params){
    let httpParams = params

      return  { params: httpParams };
  }

  getFiltersList(){
    return  this.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    }

  getCoctailsList(filter){
    console.log(filter,"filter")
    let param = {
      c: filter[0].strCategory
    }
    console.log(param)
    return  this.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?',param)
      }
}
