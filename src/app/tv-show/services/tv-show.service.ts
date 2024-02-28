import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:string='https://api.themoviedb.org/3/'
  apiKey='cdf53c51ba8de3ad35b91437f974f199'

  getSeries(endpoint:any,page:number):Observable<any>{
   return this._httpClient.get(`${this.baseUrl}${endpoint}?api_key=${this.apiKey}&page=${page}`)


   }


   getSeriesDetails(seriesId:number):Observable<any>{
   return this._httpClient.get(`${this.baseUrl}tv/${seriesId}?api_key=${this.apiKey}`)
  }

  getTrendingSeries(pageNum:number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${this.apiKey}&page=${pageNum}`)
  }

  getMovieCasting(seriesId:number,endPoint:string):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}${endPoint}/${seriesId}/credits?api_key=${this.apiKey}`)
  }



  }

