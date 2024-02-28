import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastingService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string='https://api.themoviedb.org/3/'
  apiKey='cdf53c51ba8de3ad35b91437f974f199'
  getMovieCasting(seriesId:number,endPoint:string):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${endPoint}/${seriesId}/credits?api_key=${this.apiKey}`)
  }
}
